const mongoose = require("mongoose");

const achievementsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 128,
    },
    day: {
      type: String,
      required: true,
    },
    prays: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Achievements", achievementsSchema);
