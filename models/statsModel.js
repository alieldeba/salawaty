const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema(
  {
    days: {
      type: Number,
      required: true,
      default: 0,
    },
    prays: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Stats", statsSchema);
