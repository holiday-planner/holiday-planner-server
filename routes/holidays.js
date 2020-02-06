const router = require('express').Router()
const HolidaysController = require('../controllers/holidays');

router.get('/', HolidaysController.getHolidays)

module.exports = router