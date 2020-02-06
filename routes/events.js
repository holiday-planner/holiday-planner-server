const router = require('express').Router();
const Controller = require('../controllers/events')

router.get('/', Controller.getEvents)

module.exports = router;