const route = require('express').Router()
const UserController = require('../controllers/UserController')

route
  .post('/login', UserController.login)
  .post('/register', UserController.register)

module.exports = route
