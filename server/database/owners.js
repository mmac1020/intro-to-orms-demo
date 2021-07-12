const Sequelize = require('sequelize');
const db = require('./db');

const Owner = db.define('owner', {
  name: Sequelize.STRING,
  picture: Sequelize.STRING,
});

module.exports = Owner;
