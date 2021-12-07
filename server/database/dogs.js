const Sequelize = require('sequelize')
const db = require('./db');
const {Owner} = require('./')

// What if I want name to be not an empty string or null?
// What if I want to default my picture to a cute lil puppy
// dog = {
//     name: ''
//     age: 1
// }

// dog = {
//     age: 1
// }
const Dog = db.define('dogs', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    age: Sequelize.DOUBLE,
    picture: {
        type: Sequelize.STRING,
        defaultValue: 'https://i.ytimg.com/vi/mRf3-JkwqfU/sddefault.jpg',
        validate: {
            isUrl: true
        }
    }
})

// Class and instance methods

// Class Methods:
// Class methods are good for when you want to re-use queries
Dog.getPuppies = function() {
    // I want to return all dogs that are 1 or younger
    return this.findAll(
        {
            where: {
                age: {
                    [Sequelize.Op.lte]: 1,
                    [Sequelize.Op.gte]: 0.5
                }
            }
        }
    );

    // return await this.findAll();
}

// Instance method
Dog.prototype.sayHello = function() {
    // I want to console log the dog's name saying hello
    console.log(`${this.name} says hello`);
}

// This one is a BULK UPDATE. There is a beforeBulkUpdate hook that you can use
// This one does a query to find dogs and update them
// Dog.update()
// vs
// This one just updates the dog instance you have
// dogs[0].update()

Dog.beforeBulkUpdate((bulkDogs) => {

})

Dog.beforeUpdate((instance) => {
    // You wouldn't ever get here from Dog.update();
})


// How do I import Dog?
// Const Dog = require(whateverthefileis)
module.exports = Dog;

// module.exports = {Dog}
// const {Dog} = require(whatever);
