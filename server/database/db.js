const Sequelize = require('sequelize');

// Our database connection
// this first argument is three parts
// ${nameOfDBMS}://${location that it's running}/${nameOfDB}
const db = new Sequelize('postgres://localhost:5432/ormintrodb', {
  logging: false,
});

// Creating a Dog model
// first argument is name of table.
// second argument is object of column definitions
const Dog = db.define('dogs', {
  name: Sequelize.STRING,
  // a number type
  age: Sequelize.DOUBLE,
  picture: Sequelize.STRING,
});

const Owner = db.define('owner', {
  name: Sequelize.STRING,
  picture: Sequelize.STRING,
});

// event listener on a creation event INSIDE Sequelize
Owner.beforeCreate((owner) => {
  // somehow change this owner before acutally putting it in the db
});

Dog.beforeDelete((dog) => {
  // somehow do something with this dog before deletion
});

// One to Many
// Owner.hasMany(Dog);
// Dog.belongsTo(Owner);

// Many to Many
// create a THROUGH table called dogs_owners
Dog.belongsToMany(Owner, { through: 'dogs_owners' });
Owner.belongsToMany(Dog, { through: 'dogs_owners' });

// This is how we do object exporting
// so when this is required, it will be an object {db: db}
// I will add exports here later.
// when we require this it'd be const {db} = require('./db')
module.exports = { db, Dog, Owner };

// This would be what we call the default export.
// when it is required, we require it like const db = require('./db')
// module.exports = db;
