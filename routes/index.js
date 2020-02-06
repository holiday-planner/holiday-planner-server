const router = require('express').Router();
const routerHolidays = require('./holidays')

router.use('/holidays', routerHolidays)

module.exports = router;