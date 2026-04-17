// emailTemplate.js - HTML email builder for adjustment requests

function buildAdjustmentEmail({
  coveringFaculty,
  requestingFaculty,
  date,
  dayLabel,
  slot,
  classDetails,
  requestId,
}) {
  const formattedDate = new Date(date).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const subject = `Class Adjustment Request - ${dayLabel}, ${formattedDate} | Slot ${slot.id} (${slot.time})`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Class Adjustment Request</title>
</head>
<body style="margin:0;padding:0;background:#0f1923;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1923;padding:32px 0;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#1a2635;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,.4);">
        <tr>
          <td style="background:linear-gradient(135deg,#1e3a5f 0%,#0d2137 100%);padding:32px 40px;text-align:center;border-bottom:3px solid #e8b44a;">
            <div style="font-size:36px;margin-bottom:8px;">📅</div>
            <h1 style="margin:0;color:#e8b44a;font-size:22px;font-weight:700;letter-spacing:.5px;">TechTrainers Class Adjustment</h1>
            <p style="margin:6px 0 0;color:rgba(246,231,188,.65);font-size:13px;">Even Semester 2025-26</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 40px 0;">
            <p style="margin:0;color:#c8d8e8;font-size:16px;line-height:1.6;">Dear <strong style="color:#e8b44a;">${coveringFaculty}</strong>,</p>
            <p style="margin:12px 0 0;color:#c8d8e8;font-size:15px;line-height:1.6;"><strong style="color:#fff;">${requestingFaculty}</strong> has requested your assistance in covering a class. Please find the complete details below.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 40px 0;">
            <div style="display:inline-block;background:rgba(232,180,74,.12);border:1px solid rgba(232,180,74,.35);border-radius:8px;padding:8px 16px;">
              <span style="color:rgba(246,231,188,.6);font-size:11px;letter-spacing:1px;text-transform:uppercase;">Request ID</span>
              <span style="color:#e8b44a;font-size:13px;font-weight:700;margin-left:10px;">${requestId}</span>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 40px 0;">
            <h2 style="margin:0 0 16px;color:#fff;font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Class Details</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1923;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.08);">
              <tr style="border-bottom:1px solid rgba(255,255,255,.05);">
                <td style="padding:12px 20px;color:rgba(200,216,232,.5);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.8px;width:35%;">Course</td>
                <td style="padding:12px 20px;color:#e8b44a;font-size:14px;font-weight:500;">${classDetails.c}</td>
              </tr>
              <tr style="border-bottom:1px solid rgba(255,255,255,.05);">
                <td style="padding:12px 20px;color:rgba(200,216,232,.5);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.8px;">Batch</td>
                <td style="padding:12px 20px;color:#c8d8e8;font-size:14px;font-weight:500;">${classDetails.b}</td>
              </tr>
              <tr>
                <td style="padding:12px 20px;color:rgba(200,216,232,.5);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.8px;">Room</td>
                <td style="padding:12px 20px;color:#c8d8e8;font-size:14px;font-weight:500;">${classDetails.r}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 40px 0;">
            <h2 style="margin:0 0 16px;color:#fff;font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Schedule Details</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1923;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.08);">
              <tr style="border-bottom:1px solid rgba(255,255,255,.05);">
                <td style="padding:12px 20px;color:rgba(200,216,232,.5);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.8px;width:35%;">Date</td>
                <td style="padding:12px 20px;color:#7ec8e3;font-size:14px;font-weight:500;">${formattedDate}</td>
              </tr>
              <tr style="border-bottom:1px solid rgba(255,255,255,.05);">
                <td style="padding:12px 20px;color:rgba(200,216,232,.5);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.8px;">Day</td>
                <td style="padding:12px 20px;color:#c8d8e8;font-size:14px;font-weight:500;">${dayLabel}</td>
              </tr>
              <tr style="border-bottom:1px solid rgba(255,255,255,.05);">
                <td style="padding:12px 20px;color:rgba(200,216,232,.5);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.8px;">Slot</td>
                <td style="padding:12px 20px;color:#c8d8e8;font-size:14px;font-weight:500;">Slot ${slot.id}</td>
              </tr>
              <tr>
                <td style="padding:12px 20px;color:rgba(200,216,232,.5);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.8px;">Timing</td>
                <td style="padding:12px 20px;color:#7ec8e3;font-size:14px;font-weight:500;">${slot.time}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 40px 0;">
            <h2 style="margin:0 0 16px;color:#fff;font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Requested By</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1923;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.08);">
              <tr>
                <td style="padding:12px 20px;color:rgba(200,216,232,.5);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.8px;width:35%;">Faculty</td>
                <td style="padding:12px 20px;color:#c8d8e8;font-size:14px;font-weight:500;">${requestingFaculty}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 40px 0;">
            <div style="background:rgba(126,200,227,.08);border-left:4px solid #7ec8e3;border-radius:0 8px 8px 0;padding:14px 18px;">
              <p style="margin:0;color:#7ec8e3;font-size:13px;line-height:1.6;"><strong>Note:</strong> This slot has been marked as occupied in the TechTrainers system. Please confirm with the requesting faculty or the academic coordinator.</p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 40px;text-align:center;border-top:1px solid rgba(255,255,255,.06);margin-top:24px;">
            <p style="margin:0;color:rgba(200,216,232,.4);font-size:12px;line-height:1.7;">This is an automated message from the <strong>TechTrainers Class Adjustment Platform</strong>.<br>Even Semester 2025-26. Please do not reply to this email.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;

  return { subject, html };
}

module.exports = { buildAdjustmentEmail };