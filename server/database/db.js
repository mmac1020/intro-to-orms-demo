const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/ormintrodb', {
  logging: false,
});

const Dog = db.define('dogs', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0,
      max: 20,
    },
  },
  picture: Sequelize.STRING,
});

const Owner = db.define('owners', {
  name: Sequelize.STRING,
  picture: Sequelize.STRING,
});

// 1 to many relationship
// Owner.hasMany(Dog);
// Dog.belongsTo(Owner);

// Many to Many relationship
Owner.belongsToMany(Dog, { through: 'dog_owners' });
Dog.belongsToMany(Owner, { through: 'dog_owners' });

module.exports = {
  db,
  Dog,
  Owner,
};
