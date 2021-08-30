const db = require('./db');
const Dog = require('./dogs');
const Owner = require('./owners');

// How do I set up a one to many association
// Owners can have many dogs
// Has Many - Belongs To
// Owner.hasMany(Dog);
// Dog.belongsTo(Owner);

// Which table has the foreign key?
// Dog table has the foreign key.

// How do I set up a many to many association
Dog.belongsToMany(Owner, {through: 'dogs_owners'});
Owner.belongsToMany(Dog, {through: 'dogs_owners'});

// How would I require Dog here
// const { Dog } = require('path')
module.exports = {
  db,
  Dog,
  Owner,
};
