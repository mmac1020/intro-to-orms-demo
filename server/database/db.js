const Sequelize = require('sequelize');

// the-name-of-the-database://location-of-the-database/database-name
const db = new Sequelize('postgres://localhost:5432/ormintrodb');

const Dog = db.define('dogs', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
  picture: Sequelize.TEXT,
});

// Select * from dogs
// const dogs = Dogs.findAll()

const Owner = db.define('owners', {
  name: Sequelize.STRING,
  picture: Sequelize.TEXT,
});

// Associate these things
// One - to - Many
Dog.belongsTo(Owner);
Owner.hasMany(Dog);

// Create some Dogs and Owners
async function create() {
  const fluffy = await Dog.create({
    name: 'Fluffy',
    age: 2,
    picture:
      'https://www.thesprucepets.com/thmb/wpN_ZunUaRQAc_WRdAQRxeTbyoc=/4231x2820/filters:fill(auto,1)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg',
  });
  const mac = await Owner.create({
    name: 'mac',
    picture: 'https://ca.slack-edge.com/T024FPYBQ-U017Z7YQ0SY-a18868e18f30-48',
  });
  console.log(Object.getPrototypeOf(mac));
  await mac.addDog(fluffy);
}

create();

// new Dog()
// new Owner()

// What is this export not called
// This is NOT a default export
module.exports = {
  db: db,
  Dog: Dog,
  Owner: Owner,
};
// default export
// module.exports = db;

// How do I require this export
// const ICanNameThisAnything = require('db')
