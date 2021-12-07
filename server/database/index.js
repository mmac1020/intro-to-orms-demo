const db = require('./db')
const Dog = require('./dogs');
const Owner = require('./owners');

// One to Many
// Owner.hasMany(Dog);
// Dog.belongsTo(Owner); -- FK gets put onto the Dog table

// Many to Many
// Through table named dogs_owners
Dog.belongsToMany(Owner, {through: 'dogs_owners'});
Owner.belongsToMany(Dog, {through: 'dogs_owners'});


module.exports = {
  db,
  Dog,
  Owner
}
