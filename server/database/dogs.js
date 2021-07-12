const Sequelize = require('sequelize');
const db = require('./db');
const Owner = require('./owners');

const Dog = db.define('dogs', {
  name: Sequelize.STRING,
  age: Sequelize.DOUBLE,
  picture: Sequelize.STRING,
});

//instance method
Dog.prototype.sayHello = function () {
  console.log(`${this.name} says Hello!!!!`);
};

//Class Method
Dog.getPuppies = async function () {
  return Dog.findAll({
    include: Owner,
    where: {
      age: { [Sequelize.Op.lte]: 1 },
    },
  });
};

module.exports = Dog;
