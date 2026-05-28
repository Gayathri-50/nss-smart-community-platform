const express = require('express')
const router = express.Router()
const { getWasteReports, createWasteReport } = require('../controllers/wasteController')

router.route('/').get(getWasteReports).post(createWasteReport)

module.exports = router
