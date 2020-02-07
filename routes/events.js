const router = require('express').Router();
const Controller = require('../controllers/events')

router.post('/', Controller.getEvents)

module.exports = router;