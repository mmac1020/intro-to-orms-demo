const db = require('./db')
const Dog = require('./dogs');
const Owner = require('./owners');

// This is where we want to set up our Associations
// one to many or many to many

// One to Many
// Dog.belongsTo(Owner); -- The FK is on the DOG table of ownerId
// Owner.hasMany(Dog);

// Many to Many
Dog.belongsToMany(Owner, {through: 'dog_owners'})
Owner.belongsToMany(Dog, {through: 'dog_owners'})

module.exports = {
  db,
  Dog,
  Owner
}
