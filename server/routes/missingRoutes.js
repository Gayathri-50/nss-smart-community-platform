const express = require('express');
const router = express.Router();
const {
  getMissingPersons,
  createMissingPerson,
} = require('../controllers/missingController');

router.route('/').get(getMissingPersons).post(createMissingPerson);

module.exports = router;
