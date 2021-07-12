const db = require('./db');
const Dog = require('./dogs');
const Owner = require('./owners');

//1 to Many
/*
Owner.hasMany(Dog)
Dog.belongsTo(Owner) //sets FK on Dog table - ownerId
*/

//Many to Many Relationship with Dogs and Owners!
Dog.belongsToMany(Owner, { through: 'dogs_owners' });
Owner.belongsToMany(Dog, { through: 'dogs_owners' });

module.exports = {
  db,
  Dog,
  Owner,
};
