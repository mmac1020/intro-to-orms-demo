const db = require('./db');

const Dog = db.define('dogs', {
    name: Sequelize.STRING,
    age: Sequelize.DOUBLE,
    picture: Sequelize.STRING
})

module.exports = Dog;
