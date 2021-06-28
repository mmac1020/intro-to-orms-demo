const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const { Dog, Owner } = require('./database/db.js');
const { formatDogs } = require('./format/dogs');
const formatOwners = require('./format/owners');

app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
  res.send('<h1> Welcome to the main route! </h1>');
});

//EAGER LOADING just means "join"
//select * from users join dogs on dogs.ownerId = owners.id
app.get('/dogs', async (req, res, next) => {
  try {
    // This dogs is an array
    const dogs = await Dog.findAll({
      include: [{ model: Owner, as: 'owners' }],
    });
    dogs.forEach((dog) => dog.owners)
    dogs[0].sayHello();
    res.send(formatDogs(dogs));
  } catch (err) {
    next(err);
  }
});

app.get('/owners', async (req, res, next) => {
  try {
    const owners = await Owner.findAll();
    res.send(formatOwners(owners));
  } catch (err) {
    next(err);
  }
});

app.get('/puppies', async (req, res, next) => {
  try {
    const puppies = await Dog.getPuppies();
    // throw new Error('Something I did was bad');
    res.send(formatDogs(puppies));
  } catch (err) {
    console.log('This error happened in the /puppies route');
    next(err);
  }
});

// 404 Error handler
app.use((req, res) => {
  res.status(404).send('404 NOT FOUND :( ');
});

// Custom error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 ERROR BOO :(');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
