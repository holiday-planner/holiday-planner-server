const router = require('express').Router();
const routerHolidays = require('./holidays');
const routerWeather = require('./weather');
const routerEvents = require('./events')

router.use('/holidays', routerHolidays);
router.use('/weather', routerWeather);
router.use('/events', routerEvents);

module.exports = router;