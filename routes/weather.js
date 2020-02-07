const router = require('express').Router()
const WeatherController = require('../controllers/weather');

router.post('/', WeatherController.getWeather)

module.exports = router