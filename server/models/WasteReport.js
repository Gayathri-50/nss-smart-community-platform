const mongoose = require('mongoose');

const wasteReportSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: 'Pending',
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('WasteReport', wasteReportSchema);
