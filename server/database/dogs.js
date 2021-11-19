const Sequelize = require('sequelize')
const db = require('./db');
const {Owner} = require('./')

const Dog = db.define('dogs', {
    name: Sequelize.STRING,
    age: Sequelize.DOUBLE,
    picture: Sequelize.STRING
})

const mac = {name: 'whatever'}

mac.classMethod = function() {
    // do something
}

// Class and instance methods

// Class Methods:
// Class methods are good for when you want to re-use queries
Dog.getPuppies = async function() {
    // 'this' is the Dog class itself
    return this.findAll(
        {
            include: Owner,
            where: {
                age: {
                    [Sequelize.Op.lte]: 1
                }
            }
        }
    )
}

// Instance method
Dog.prototype.sayHello = function() {
    // 'this' is the individual dog we're accessing
    console.log(`${this.name} says hello`)
}

module.exports = Dog;
