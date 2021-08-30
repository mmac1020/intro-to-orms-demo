const Sequelize = require('sequelize');
const db = require('./db');
const Owner = require('./owners');

const Dog = db.define('dogs', {
  name: Sequelize.STRING,
  age: Sequelize.DOUBLE,
  picture: Sequelize.STRING,
});

// Sequelize instance method
// How do I access this?
// const dog = Dog.findByPk(pk);
// dog.sayHello();
Dog.prototype.sayHello = function () {
  console.log(`${this.name} says Hello!!!!`);
};

// Sequelize Class Method
// await Dog.getPuppies();
Dog.getPuppies = function () {
  return Dog.findAll({
    include: Owner,
    where: {
      age: { [Sequelize.Op.lte]: 1 },
    },
  });
};

// How do we hit this hook?
// dogInstance.update()
Dog.beforeUpdate((instance) => {
  console.log('inside the before update hook!');
});

// How about this one?
// Dog.update() --- This is a BULK UPDATE
// Model.update(updateToApply, query)
// Dog.update(dogUpdate,
//   {
//     where: {
//       age: {
//         [Sequelize.Op.GTE]: 2
//       }
//     }
//   }
// )
Dog.beforeBulkUpdate((instance) => {
  console.log('inside the before bulk update hook!');
});

Dog.beforeSave((instance) => {
  console.log('inside the before save hook!');
});

// How do we require this Dog
// What is this export?
// This is the DEFAULT EXPORT
// const Dog = require('path')
module.exports = Dog;
