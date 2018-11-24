require('dotenv').config();
const express = require('express');
const Sequelize = require('sequelize');
const cors = require('cors');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 3000;
const stage = process.env.STAGE
const routes = require('./routes')
let sequelize;

/* istanbul ignore next */
if (stage === 'development') {
  sequelize = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost/bill-tracker-dev`);
} else if (stage === 'production') {
  sequelize = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost/bill-tracker-prod`);
} else if (stage === 'test') {
  sequelize = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost/bill-tracker-test`);
}

app.use(cors());
app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes)
app.get('/', (req, res) => {
  return res.status(200).json({
    message: `Server running on port ${port}`
  })
});

app.listen(port, function() {
  return console.log(`\nServer running on port ${port}`)
});

let dbStats = async () => {
  await sequelize
  .authenticate()
  .then(() => {
    /* istanbul ignore next */
    return console.log(`DB Connection has been established successfully to DB stage ${stage || 'dev'}\n`);
  })
  .catch(err => {
    /* istanbul ignore next */
    console.error('Unable to connect to the database:', err);
  });
}

dbStats()

module.exports = app
