const router = require('express').Router();
const routerHolidays = require('./holidays');
const routerWeather = require('./weather');
const routerEvents = require('./events')
const auth = require('./auth')

router.use('/auth', auth)
router.get('/', (req, res) => {
  res.status(200).json('Welcome to Holiday Planner API')
})
router.use('/holidays', routerHolidays);
router.use('/weather', routerWeather);
router.use('/events', routerEvents);

module.exports = router