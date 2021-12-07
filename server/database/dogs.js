const Sequelize = require('sequelize')
const db = require('./db');
const {Owner} = require('./')

// What if I want name to be not an empty string or null?
// What if I want to default my picture to a cute lil puppy
const Dog = db.define('dogs', {
    name: Sequelize.STRING,
    age: Sequelize.DOUBLE,
    picture: Sequelize.STRING
})

// Class and instance methods

// Class Methods:
// Class methods are good for when you want to re-use queries
Dog.getPuppies = async function() {
    // I want to return all dogs that are 1 or younger
}

// Instance method
Dog.prototype.sayHello = function() {
    // I want to console log the dog's name saying hello
}

module.exports = Dog;
