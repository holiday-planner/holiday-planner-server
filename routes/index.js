const router = require('express').Router()
const routerHolidays = require('./holidays')
const holidayController = require('../controllers/holiday');
const auth = require('./auth')

router.get('/', (req, res) => {
  res.status(200).json('Welcome to Holiday Planner API')
})
router.use('/holidays', routerHolidays)
router.get('/weather', holidayController.getWeather)
router.use('/auth', auth)

module.exports = router