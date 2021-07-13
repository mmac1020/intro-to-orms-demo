const Sequelize = require('sequelize');
const db = require('./db');
const Owner = require('./owners');

const Dog = db.define('dogs', {
  name: Sequelize.STRING,
  age: Sequelize.DOUBLE,
  picture: Sequelize.STRING,
});

//instance method
// const dogs = Dog.findAll();
// I need to retrieve an instance from the database to use these methods
// dogs[0].sayHello();
Dog.prototype.sayHello = function () {
  console.log(`${this.name} says Hello!!!!`);
};

//Class Method
// await Dog.getPuppies();
Dog.getPuppies = function () {
  return Dog.findAll({
    include: Owner,
    where: {
      age: { [Sequelize.Op.lte]: 1 },
    },
  });
};

// How do we require this Dog
// Default export.
// const Dog = require('filePath');
module.exports = Dog;
