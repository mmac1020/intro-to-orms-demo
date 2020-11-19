const Sequelize = require('sequelize')
const Op = Sequelize.Op

const db = new Sequelize("postgres://localhost:5432/ormintrodb", {
  logging: false
});

const Dog = db.define('dogs', {
    name: Sequelize.STRING, 
    age: Sequelize.DOUBLE,
    picture: Sequelize.STRING
})

const Owner = db.define('owner', {
    name: Sequelize.STRING,
    picture: Sequelize.STRING
})

//1 to Many 
/*
Owner.hasMany(Dog) 
Dog.belongsTo(Owner) //sets FK on Dog table - ownerId
*/

//Many to Many Relationship with Dogs and Owners! 
Dog.belongsToMany(Owner, {through: 'dogs_owners'})
Owner.belongsToMany(Dog, {through: 'dogs_owners'})

//instance method
Dog.prototype.sayHello = function () {
    console.log(`${this.name} says Hello!!!!`)
}

//Class Method
Dog.getPuppies = async function () {
    const puppies = await Dog.findAll({
        include: Owner,
        where: {
            age: {[Op.lte]: 1}}
        }
    )
    return puppies
}

module.exports = {
    db,
    Dog, 
    Owner
}
