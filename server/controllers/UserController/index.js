const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
        });
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        });
      })
  }

  static login (req, res) {

    let where = {
      email: req.body.email
    }

    User.findOne({ where: where })
      .then(data => {
        if (data) {

          let { id, email, uid } = data.dataValues
          
          if (bcrypt.compareSync(req.body.uid, uid)) {

            let token = jwt.sign({
              id,
              email
            }, process.env.SECRET_JWT)

            res.status(200).json({
              token
            }); 

          } else {
            throw new Error('validate error: wrong uid user')
          }
        } else {
          throw new Error('validate error: user not found')
        }
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        }); 
      })
  }
}

module.exports = UserController
