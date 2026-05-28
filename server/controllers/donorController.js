const Donor = require("../models/Donor")

// Create Donor
const createDonor = async (req, res) => {
  try {
    const donor = await Donor.create(req.body)

    res.status(201).json({
      success: true,
      donor,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

// Get All Donors
const getDonors = async (req, res) => {
  try {
    const donors = await Donor.find()

    res.status(200).json({
      success: true,
      count: donors.length,
      donors,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

module.exports = {
  createDonor,
  getDonors,
}