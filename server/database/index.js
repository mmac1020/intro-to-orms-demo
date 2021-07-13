const db = require('./db');
const Dog = require('./dogs');
const Owner = require('./owners');

// How do I set up a one to many association
// Owners can have many dogs
// Owner.hasMany(Dog);
// Dog.belongsTo(Owner);

// How do I set up a many to many association
Dog.belongsToMany(Owner, {through: 'dogs_owners'})
Owner.belongsToMany(Dog, { through: 'dogs_owners' });

// How would I require Dog here

// Not doing a default export. Named Export

// DON'T DO THIS!!!!!!!!!!!!!
// const Dog = require('filePath');
// Dog = {db: db, Dog: Dog, Owner: Owner}
// Dog.Dog
// !!!!!!!!!!!!!!!!!!!!!!!!!!

// const { Dog } = require('filePath')
module.exports = {
  db,
  Dog,
  Owner,
};
