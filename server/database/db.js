const Sequelize = require('sequelize')

const db = new Sequelize("postgres://localhost:5432/ormintrodb", {
  logging: true
});

module.exports = db;
