const mongoose = require("mongoose");

const donateKhoonSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
    },
    mobile: {
      type: String,
      required: true,
      match: [/^[6-9]\d{9}$/, "Invalid mobile number"],
    },
    bloodType: {
      type: String,
      required: true,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    reason: {
      type: String,
      trim: true,
    },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("DonateKhoon", donateKhoonSchema);
