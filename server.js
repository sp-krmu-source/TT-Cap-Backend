// =============================================================================
//  server.js  —  TechTrainers Adjustment Backend
//  Stack: Express + Mongoose (MongoDB) + SendGrid Mail
// =============================================================================

require("dotenv").config();

const express   = require("express");
const cors      = require("cors");
const mongoose  = require("mongoose");
const sgMail    = require("@sendgrid/mail");
const crypto    = require("crypto");

const {
  SLOTS, DAYS, DAY_LABELS, TRAINER_NAMES,
  FACULTY_EMAIL_KEYS,
  getCell, weekLoad, dayLoad, getSlotById,
} = require("./timetableData");

const { buildAdjustmentEmail } = require("./emailTemplate");
const Adjustment = require("./models/Adjustment");

// ─────────────────────────────────────────────────────────────────────────────
//  Express setup
// ─────────────────────────────────────────────────────────────────────────────
const app  = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());

// ─────────────────────────────────────────────────────────────────────────────
//  MongoDB connection
// ─────────────────────────────────────────────────────────────────────────────
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/techtrainers";

mongoose
  .connect(MONGODB_URI)
  .then(() =>
    console.log(
      "MongoDB connected:",
      MONGODB_URI.replace(/:\/\/.*@/, "://<credentials>@")
    )
  )
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

mongoose.connection.on("disconnected", () =>
  console.warn("MongoDB disconnected")
);
mongoose.connection.on("reconnected", () => console.log("MongoDB reconnected"));

// ─────────────────────────────────────────────────────────────────────────────
//  SendGrid setup
// ─────────────────────────────────────────────────────────────────────────────
if (!process.env.SENDGRID_API_KEY) {
  console.warn(
    "WARNING: SENDGRID_API_KEY is not set — emails will be skipped."
  );
} else {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL;
const FROM_NAME  = process.env.SENDGRID_FROM_NAME || "TechTrainers Platform";

// ─────────────────────────────────────────────────────────────────────────────
//  Auth helpers
// ─────────────────────────────────────────────────────────────────────────────
const otpStore     = new Map();
const sessionStore = new Map();
const SESSION_TTL  = 1000 * 60 * 5;  // 5 min
const OTP_TTL      = 1000 * 60 * 5;  // 5 min

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function generateToken() {
  return crypto.randomBytes(24).toString("hex");
}

function getAllAllowedEmails() {
  return Object.values(FACULTY_EMAIL_KEYS)
    .map((key) => process.env[key])
    .filter(Boolean);
}

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization || "";

  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Please login first." });
  }

  const token   = authHeader.split(" ")[1];
  const session = sessionStore.get(token);

  if (!session) {
    return res
      .status(401)
      .json({ error: "Session not found. Please login again." });
  }

  if (Date.now() > session.expiresAt) {
    sessionStore.delete(token);
    return res
      .status(401)
      .json({ error: "Session expired. Please login again." });
  }

  req.user = session;
  next();
}

// ─────────────────────────────────────────────────────────────────────────────
//  Generic send-email helper (uses SendGrid HTTP API — no SMTP ports)
// ─────────────────────────────────────────────────────────────────────────────
async function sendEmail({ to, subject, html }) {
  if (!process.env.SENDGRID_API_KEY || !FROM_EMAIL) {
    throw new Error("SendGrid not configured (missing API key or FROM_EMAIL).");
  }

  await sgMail.send({
    to,
    from: { email: FROM_EMAIL, name: FROM_NAME },
    subject,
    html,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
//  Domain helpers
// ─────────────────────────────────────────────────────────────────────────────
function getFacultyEmail(name) {
  const key = FACULTY_EMAIL_KEYS[name];
  return key ? (process.env[key] || null) : null;
}

function generateRequestId() {
  const ts   = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `ADJ-${ts}-${rand}`;
}

function isFreeOnTimetable(name, day, slotId) {
  return !getCell(name, day, Number(slotId));
}

// ─────────────────────────────────────────────────────────────────────────────
//  ROUTES
// ─────────────────────────────────────────────────────────────────────────────

// ── GET /api/health ───────────────────────────────────────────────────────────
app.get("/api/health", (_req, res) => {
  res.json({
    status:       "ok",
    uptime:       process.uptime(),
    mongo:        mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    emailReady:   !!(process.env.SENDGRID_API_KEY && FROM_EMAIL),
  });
});

// ── GET /api/trainers ─────────────────────────────────────────────────────────
app.get("/api/trainers", (_req, res) => {
  res.json({ trainers: TRAINER_NAMES });
});

// ── GET /api/available ────────────────────────────────────────────────────────
app.get("/api/available", async (req, res) => {
  try {
    const { day, slotId, date } = req.query;

    if (!day || !slotId || !date) {
      return res
        .status(400)
        .json({ error: "day, slotId, and date are all required." });
    }
    if (!DAYS.includes(day)) {
      return res
        .status(400)
        .json({ error: "Invalid day. Use: Mo Tu We Th Fr" });
    }
    const slot = getSlotById(slotId);
    if (!slot) {
      return res
        .status(400)
        .json({ error: "Invalid slotId. Must be 1–8." });
    }

    const bookedAdjustments = await Adjustment.find({
      date,
      slotId: Number(slotId),
      status: { $ne: "cancelled" },
    }).lean();

    const bookedNames = new Set(bookedAdjustments.map((a) => a.coveringFaculty));

    const availableTrainers = TRAINER_NAMES.filter(
      (name) =>
        isFreeOnTimetable(name, day, slotId) && !bookedNames.has(name)
    )
      .map((name) => ({
        name,
        weeklyLoad:      weekLoad(name),
        dayLoad:         dayLoad(name, day),
        emailConfigured: !!getFacultyEmail(name),
      }))
      .sort((a, b) => a.weeklyLoad - b.weeklyLoad);

    return res.json({
      day,
      dayLabel:        DAY_LABELS[day],
      date,
      slotId:          Number(slotId),
      slotTime:        slot.time,
      availableTrainers,
      totalAvailable:  availableTrainers.length,
    });
  } catch (err) {
    console.error("GET /api/available error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
});

// ── POST /api/auth/send-otp ───────────────────────────────────────────────────
app.post("/api/auth/send-otp", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    const allowedEmails = getAllAllowedEmails();

    if (!allowedEmails.includes(email)) {
      return res
        .status(403)
        .json({ error: "Access denied. Email not authorized." });
    }

    const otp = generateOtp();

    otpStore.set(email, { otp, expiresAt: Date.now() + OTP_TTL });

    await sendEmail({
      to:      email,
      subject: "TechTrainers OTP Login",
      html:    `
        <div style="font-family:sans-serif;max-width:400px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
          <h2 style="margin:0 0 16px;font-size:20px;color:#111">Your OTP</h2>
          <p style="font-size:32px;font-weight:700;letter-spacing:6px;color:#1d4ed8;margin:0 0 16px">${otp}</p>
          <p style="color:#6b7280;font-size:14px;margin:0">Valid for 5 minutes. Do not share this code.</p>
        </div>
      `,
    });

    return res.json({ success: true, message: "OTP sent successfully." });
  } catch (err) {
    console.error("send-otp error:", err.message);

    // Surface SendGrid-specific errors clearly in logs
    if (err.response) {
      console.error("SendGrid error body:", JSON.stringify(err.response.body));
    }

    return res.status(500).json({ error: "Failed to send OTP. Please try again." });
  }
});

// ── POST /api/auth/verify-otp ─────────────────────────────────────────────────
app.post("/api/auth/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  const record = otpStore.get(email);

  if (!record) {
    return res
      .status(400)
      .json({ error: "OTP not found. Please request again." });
  }

  if (Date.now() > record.expiresAt) {
    otpStore.delete(email);
    return res.status(400).json({ error: "OTP expired." });
  }

  if (record.otp !== otp) {
    return res.status(400).json({ error: "Invalid OTP." });
  }

  otpStore.delete(email);

  const token = generateToken();

  sessionStore.set(token, {
    email,
    expiresAt: Date.now() + SESSION_TTL,
  });

  return res.json({ success: true, token, email });
});

// ── POST /api/request-adjustment ─────────────────────────────────────────────
app.post("/api/request-adjustment", authMiddleware, async (req, res) => {
  try {
    const {
      requestingFaculty,
      coveringFaculty,
      day,
      slotId,
      date,
      classDetails,
    } = req.body;

    // Validate required fields
    if (
      !requestingFaculty ||
      !coveringFaculty ||
      !day ||
      !slotId ||
      !date
    ) {
      return res.status(400).json({
        error:
          "requestingFaculty, coveringFaculty, day, slotId, and date are all required.",
      });
    }
    if (!TRAINER_NAMES.includes(requestingFaculty)) {
      return res.status(400).json({
        error: `Unknown requesting faculty: "${requestingFaculty}"`,
      });
    }
    if (!TRAINER_NAMES.includes(coveringFaculty)) {
      return res.status(400).json({
        error: `Unknown covering faculty: "${coveringFaculty}"`,
      });
    }
    if (requestingFaculty === coveringFaculty) {
      return res.status(400).json({
        error: "Requesting and covering faculty cannot be the same person.",
      });
    }
    if (!DAYS.includes(day)) {
      return res.status(400).json({ error: "Invalid day." });
    }
    const slot = getSlotById(slotId);
    if (!slot) {
      return res
        .status(400)
        .json({ error: "Invalid slotId (must be 1–8)." });
    }

    // Availability re-check (race-condition guard)
    if (!isFreeOnTimetable(coveringFaculty, day, Number(slotId))) {
      return res.status(409).json({
        error: `${coveringFaculty} is occupied in their regular timetable on ${DAY_LABELS[day]}, Slot ${slotId}.`,
      });
    }

    const alreadyBooked = await Adjustment.isAlreadyAssigned(
      coveringFaculty,
      date,
      Number(slotId)
    );
    if (alreadyBooked) {
      return res.status(409).json({
        error: `${coveringFaculty} is already assigned an adjustment on ${date}, Slot ${slotId}.`,
      });
    }

    const resolvedDetails =
      classDetails ||
      getCell(requestingFaculty, day, Number(slotId)) ||
      { c: "N/A", b: "N/A", r: "N/A" };

    const toEmail   = getFacultyEmail(coveringFaculty);
    const requestId = generateRequestId();

    // Save to MongoDB
    const record = new Adjustment({
      requestId,
      requestingFaculty,
      coveringFaculty,
      day,
      dayLabel:     DAY_LABELS[day],
      slotId:       Number(slotId),
      slotTime:     slot.time,
      date,
      classDetails: resolvedDetails,
      status:       "assigned",
      emailSent:    false,
    });

    await record.save();

    // Send email via SendGrid
    let emailStatus = "not_configured";

    if (toEmail && process.env.SENDGRID_API_KEY && FROM_EMAIL) {
      try {
        const { subject, html } = buildAdjustmentEmail({
          coveringFaculty,
          requestingFaculty,
          date,
          dayLabel: DAY_LABELS[day],
          slot,
          classDetails: resolvedDetails,
          requestId,
        });

        await sendEmail({ to: toEmail, subject, html });

        record.emailSent = true;
        await record.save();
        emailStatus = "sent";
        console.log(`Email sent to ${toEmail} for request ${requestId}`);
      } catch (mailErr) {
        const errMsg = mailErr.response
          ? JSON.stringify(mailErr.response.body)
          : mailErr.message;
        console.error("Email send error:", errMsg);
        record.emailError = errMsg;
        await record.save();
        emailStatus = "failed";
      }
    } else {
      emailStatus = toEmail
        ? "sendgrid_not_configured"
        : "no_email_for_faculty";
    }

    return res.status(201).json({
      success: true,
      requestId,
      emailStatus,
      message: `Adjustment assigned. ${coveringFaculty} will cover Slot ${slotId} (${slot.time}) on ${date}.`,
      record:  record.toObject(),
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({
        error:
          "This slot was just assigned to someone else. Please refresh and try again.",
      });
    }
    console.error("POST /api/request-adjustment error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
});

// ── GET /api/adjustments ──────────────────────────────────────────────────────
app.get("/api/adjustments", async (req, res) => {
  try {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    if (req.query.date)   filter.date   = req.query.date;
    if (req.query.faculty) {
      filter.$or = [
        { requestingFaculty: req.query.faculty },
        { coveringFaculty:   req.query.faculty },
      ];
    }

    const adjustments = await Adjustment.find(filter)
      .sort({ createdAt: -1 })
      .lean();

    return res.json({ count: adjustments.length, adjustments });
  } catch (err) {
    console.error("GET /api/adjustments error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
});

// ── DELETE /api/adjustments/:requestId ───────────────────────────────────────
app.delete("/api/adjustments/:requestId", async (req, res) => {
  try {
    const { requestId } = req.params;
    const adj = await Adjustment.findOne({ requestId });

    if (!adj) {
      return res
        .status(404)
        .json({ error: `Adjustment "${requestId}" not found.` });
    }
    if (adj.status === "cancelled") {
      return res
        .status(400)
        .json({ error: "Adjustment is already cancelled." });
    }

    adj.status = "cancelled";
    await adj.save();

    return res.json({
      success: true,
      message: `Adjustment ${requestId} cancelled. Slot is now available again.`,
    });
  } catch (err) {
    console.error("DELETE /api/adjustments error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
//  Start server
// ─────────────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n TechTrainers backend  →  http://localhost:${PORT}`);
  console.log(
    `   SendGrid from : ${FROM_EMAIL || "NOT SET — emails will be skipped"}`
  );
  console.log(
    `   MongoDB       : ${MONGODB_URI.replace(/:\/\/.*@/, "://<credentials>@")}\n`
  );
});