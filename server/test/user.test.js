require('dotenv').config()
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = require('chai').expect

const app = require('../app')
const User = require('../models').User

let userDummy1 = {
  fname: 'andri',
  lname: 'doe',
  email: 'johndoe@gmail.com',
  uid: 'johndoexyyy1sakk2'
}

chai.use(chaiHttp)

describe('checking server is running on port 3000', () => {
  it('should give response with log "server running on port 3000"', done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.have.property('message')
        expect(res.body.message).to.equal('Server running on port 3000')
        done()
      })
  })
})

describe('create a new account', () => {

  afterEach(done => {
    userDummy1 = {
    fname: 'andri',
    lname: 'doe',
    email: 'johndoe@gmail.com',
    uid: 'johndoexyyy1sakk2'
  }
    done()
  })

  afterEach(done => {
    User.destroy({
      where: {},
      truncate: true
    })
      .then(() => {
        done()
      })
  })

  it('should give response message "creating a new account success"', done => {
    chai
      .request(app)
      .post('/users')
      .send(userDummy1)
      .end((err, res) => {
        expect(res).to.have.status(201)
        expect(res.body).to.have.property('message')
        expect(res.body).to.have.property('data')
        expect(res.body.message).to.equal(`creating account with email ${userDummy1.email} success`)
        expect(res.body.data).to.have.property('id')
        expect(res.body.data).to.have.property('uid')
        expect(res.body.data).to.have.property('fname')
        expect(res.body.data).to.have.property('lname')
        expect(res.body.data).to.have.property('email')
        expect(res.body.data).to.have.property('balance')
        expect(res.body.data.fname).to.equal(userDummy1.fname)
        expect(res.body.data.lname).to.equal(userDummy1.lname)
        expect(res.body.data.email).to.equal(userDummy1.email)
        expect(res.body.data.balance).to.equal(0)
        done()
      })
  })
  
  it('should give response message "Validation error: first name must be a letter"', done => {

    userDummy1.fname = '23s'

    chai
      .request(app)
      .post('/users')
      .send(userDummy1)
      .end((err, res) => {
        expect(res).to.have.status(500)
        expect(res.body).to.have.property('message')
        expect(res.body.message).to.equal('Validation error: first name must be a letter')
        done()
      })
  })

  it('should give response message "Validation error: first name length must be greater than 3"', done => {

    userDummy1.fname = 'as'

    chai
      .request(app)
      .post('/users')
      .send(userDummy1)
      .end((err, res) => {
        expect(res).to.have.status(500)
        expect(res.body).to.have.property('message')
        expect(res.body.message).to.equal('Validation error: first name length must be greater than 3')
        done()
      })
  })

  it('should give response message "Validation error: last name must be a letter"', done => {

    userDummy1.lname = '212eeqwe'

    chai
      .request(app)
      .post('/users')
      .send(userDummy1)
      .end((err, res) => {
        expect(res).to.have.status(500)
        expect(res.body).to.have.property('message')
        expect(res.body.message).to.equal('Validation error: last name must be a letter')
        done()
      })
  })

  it('should give response message "Validation error: last name must be a letter"', done => {

    userDummy1.lname = '212eeqwe'

    chai
      .request(app)
      .post('/users')
      .send(userDummy1)
      .end((err, res) => {
        expect(res).to.have.status(500)
        expect(res.body).to.have.property('message')
        expect(res.body.message).to.equal('Validation error: last name must be a letter')
        done()
      })
  })

  it('should give response message "Validation error: uid must be filled"', done => {

    userDummy1.uid = ''

    chai
      .request(app)
      .post('/users')
      .send(userDummy1)
      .end((err, res) => {
        expect(res).to.have.status(500)
        expect(res.body).to.have.property('message')
        expect(res.body.message).to.equal('Validation error: uid must be filled')
        done()
      })
  })
})

describe('creating account with duplicate email', () => {

  afterEach(done => {
    User.destroy({
      where: {},
      truncate: true
    })
      .then(() => {
        done()
      })
  })

  it('should give response message "Validation error if email is duplicate"', done => {

  chai
    .request(app)
    .post('/users')
    .send(userDummy1)
    .end((err, res) => {

    })

    chai
      .request(app)
      .post('/users')
      .send(userDummy1)
      .end((err, res) => {
        expect(res).to.have.status(500)
        expect(res.body).to.have.property('message')
        expect(res.body.message).to.equal('Validation error')
        done()
      })
  })
})
