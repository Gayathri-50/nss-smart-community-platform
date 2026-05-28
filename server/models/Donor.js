const mongoose = require("mongoose")

const donorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    bloodGroup: {
      type: String,
      required: true,
    },

    district: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    availability: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Donor", donorSchema)