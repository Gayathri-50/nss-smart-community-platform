const WasteReport = require('../models/WasteReport')

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next)
  } catch (error) {
    next(error)
  }
}

const getWasteReports = asyncHandler(async (req, res) => {
  try {
    const reports = await WasteReport.find()
    res.status(200).json({
      success: true,
      count: reports.length,
      wasteReports: reports,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

const createWasteReport = asyncHandler(async (req, res) => {
  try {
    const report = await WasteReport.create(req.body)
    res.status(201).json({ success: true, wasteReport: report })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

module.exports = {
  getWasteReports,
  createWasteReport,
}
