const route = require('express').Router()

const UserController = require('../controllers/UserController')
const API = require('../API')
const {
  register,
  login
} = API

route
  .post(login, UserController.login)
  .post(register, UserController.register)

module.exports = route
