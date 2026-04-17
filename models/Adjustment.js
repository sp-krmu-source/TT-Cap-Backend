// ─────────────────────────────────────────────────────────────────────────────
//  models/Adjustment.js  —  Mongoose schema for an adjustment request
// ─────────────────────────────────────────────────────────────────────────────

const mongoose = require("mongoose");

const classDetailsSchema = new mongoose.Schema(
  {
    c: { type: String, required: true },
    b: { type: String, required: true },
    r: { type: String, required: true },
  },
  { _id: false }
);

const adjustmentSchema = new mongoose.Schema(
  {
    requestId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    requestingFaculty: { type: String, required: true, trim: true },
    coveringFaculty:   { type: String, required: true, trim: true, index: true },
    day: {
      type: String,
      required: true,
      enum: ["Mo", "Tu", "We", "Th", "Fr"],
    },
    dayLabel:  { type: String, required: true },
    slotId:    { type: Number, required: true, min: 1, max: 8 },
    slotTime:  { type: String, required: true },
    date:      { type: String, required: true, index: true },
    classDetails: { type: classDetailsSchema, required: true },
    status: {
      type: String,
      enum: ["pending", "assigned", "cancelled"],
      default: "pending",
      index: true,
    },
    emailSent:  { type: Boolean, default: false },
    emailError: { type: String,  default: null  },
  },
  { timestamps: true }
);

// Compound unique index — one non-cancelled assignment per faculty per date+slot
adjustmentSchema.index(
  { coveringFaculty: 1, date: 1, slotId: 1 },
  {
    unique: true,
    partialFilterExpression: { status: { $ne: "cancelled" } },
  }
);

// Static: check if a faculty is already booked for a given date+slot
adjustmentSchema.statics.isAlreadyAssigned = async function (coveringFaculty, date, slotId) {
  const count = await this.countDocuments({
    coveringFaculty,
    date,
    slotId: Number(slotId),
    status: { $ne: "cancelled" },
  });
  return count > 0;
};

module.exports = mongoose.model("Adjustment", adjustmentSchema);