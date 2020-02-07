const router = require('express').Router()
const HolidaysController = require('../controllers/holidays');

router.post('/', HolidaysController.getHolidays)

module.exports = router