import mongoose from "mongoose";

const billSchema = new mongoose.Schema(
  {
    billNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    consultationFee: {
      type: Number,
      default: 0,
    },

    medicineCharges: {
      type: Number,
      default: 0,
    },

    testCharges: {
      type: Number,
      default: 0,
    },

    roomCharges: {
      type: Number,
      default: 0,
    },

    otherCharges: {
      type: Number,
      default: 0,
    },

    gst: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["Paid", "Unpaid"],
      default: "Unpaid",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Bill", billSchema);