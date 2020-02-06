const router = require('express').Router()
const User = require('../controllers/User')

router.post('/googleSign', User.googleSign)

module.exports = router