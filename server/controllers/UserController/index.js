const User = require('../../models').User

class UserController {

  static register (req, res) {
    User.create({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      uid: req.body.uid
    })
      .then(data => {
        res.status(201).json({
          message: `creating account with email ${req.body.email} success`,
          data
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }
}

module.exports = UserController
