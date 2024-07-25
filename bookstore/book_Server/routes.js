
const express = require('express')

const userController = require('./controller/userController')
const bookController = require('./controller/bookController')

const router = new express.Router()

// login
router.post('/login',userController.loginController)

//get books
router.get('/getbook',bookController.getBookController)

module.exports = router