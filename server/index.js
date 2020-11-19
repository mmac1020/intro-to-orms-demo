const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const {Dog, Owner} = require('./database/db.js')
const {formatDog, formatDogs} = require('./format/dogs')
const formatOwners = require('./format/owners');

app.use(morgan('dev'))

app.get('/', async (req, res, next) => {
    res.send("<h1> Welcome to the main route! </h1>")
})

//EAGER LOADING just means "join"
//select * from users join dogs on dogs.ownerId = owners.id
app.get('/dogs', async (req, res, next) => {
    try {
        const dogs = await Dog.findAll({include: Owner})
        dogs[0].sayHello()
        res.send(formatDogs(dogs))
    } catch(err) {
        next(err)
    }
})

app.get('/first-dog', async (req, res, next) => {
    try {
        const firstDog = await Dog.findByPk(
            1,
            {
                include: Owner
            }
        );
        firstDog.sayHello();
        res.send(formatDog(firstDog));
    } catch (err) {
        next(err);
    }
})

app.get('/owners', async (req, res, next) => {
    try {
         const owners = await Owner.findAll()
         res.send(formatOwners(owners))
    } catch(err) {
        next(err)
    }
})

app.get('/puppies', async (req, res, next) => {
    try {
        const puppies = await Dog.getPuppies()
        res.send(formatDogs(puppies))
    } catch(err) {
        next(err)
    }
})

app.get('/cody-born', async (req, res, next) => {
    try {
        const cody = await Dog.create(
            {
                name: 'Cody'
            }
        )
        res.send(cody);
    }
    catch(err) {
        next(err);
    }
})

app.get('/delete-cody', async (req, res, next) => {
    try {
        const byeCody = await Dog.findOne({
            where: {
                name: 'Cody'
            }
        })
        await byeCody.destroy();
        res.send('Cody has been destroyed :(')
    } catch (err) {
        next(err);
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
