const express = require('express');
const router = express.Router();
const holidayController = require('../controllers/holiday');

router.get('/weather', holidayController.getWeather);

module.exports = router;