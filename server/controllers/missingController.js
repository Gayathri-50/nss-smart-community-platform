const MissingPerson = require('../models/MissingPerson')

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next)
  } catch (error) {
    next(error)
  }
}

const getMissingPersons = asyncHandler(async (req, res) => {
  const missingPersons = await MissingPerson.find()
  res.status(200).json({
    success: true,
    count: missingPersons.length,
    missingPersons,
  })
})

const createMissingPerson = asyncHandler(async (req, res) => {
  const missingPerson = await MissingPerson.create(req.body)
  res.status(201).json({
    success: true,
    missingPerson,
  })
})

module.exports = {
  getMissingPersons,
  createMissingPerson,
}
