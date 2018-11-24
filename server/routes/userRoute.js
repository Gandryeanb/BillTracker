const route = require('express').Router()
const UserController = require('../controllers/UserController')

route
  .post('/', UserController.register)

module.exports = route
