
const router = require('express').Router();
const routerHolidays = require('./holidays')
const holidayController = require('../controllers/holiday');

router.use('/holidays', routerHolidays)
router.get('/weather', holidayController.getWeather);

module.exports = router;