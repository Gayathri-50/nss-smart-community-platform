const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');
const userRoutes = require('./userRoutes');
const missingRoutes = require('./missingRoutes');
const wasteRoutes = require('./wasteRoutes');

router.get('/', healthController.getStatus);
router.use('/users', userRoutes);
router.use('/missing', missingRoutes);
router.use('/waste', wasteRoutes);

module.exports = router;
