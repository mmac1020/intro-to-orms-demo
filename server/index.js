const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const { formatDogs } = require('./format/dogs');
const formatOwners = require('./format/owners');
const { db, Dog, Owner } = require('./database/db');

app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
  res.send('<h1> Welcome to the main route! </h1>');
});

app.get('/dogs', async (req, res, next) => {
  try {
    // ******* EAGER LOAD -- just means JOIN *********
    const dogs = await Dog.findAll({
      include: [
        {
          model: Owner,
          where: {
            name: 'Joe',
          },
        },
      ],
    });
    dogs.forEach((dog) => {
      console.log('owners: ', dog.owners);
      dog.owners.forEach((owner) => {
        // now I can log each individual owner
      });
      // Calling my sayHello instance method
      console.log(dog.sayHello());
    });
    // if (user is not an admin) {
    //   throw new Error('Invalid user access');
    //   res.status(500).send('Invalid user access');
    // }
    res.send(formatDogs(dogs));
  } catch (err) {
    next(err);
  }
});

app.get('/joe-dogs', async (req, res, next) => {
  try {
    // ******* EAGER LOAD -- just means JOIN *********
    const dogs = await Dog.findAll({
      include: [
        {
          model: Owner,
          where: {
            name: 'Joe',
          },
        },
      ],
    });
    res.send(formatDogs(dogs));
  } catch (err) {
    next(err);
  }
});

app.get('/owners', async (req, res, next) => {
  try {
    const owners = await Owner.findAll({
      include: [{ model: Dog }],
    });
    owners.forEach((owner) => {
      console.log('dogs', owner.dogs);
    });
    res.send(formatOwners(owners));
  } catch (err) {
    next(err);
  }
});

app.get('/puppies', async (req, res, next) => {
  try {
    // Calling my findPuppies class method
    const puppies = await Dog.findPuppies();
    res.send(formatDogs(puppies));
  } catch (err) {
    next(err);
  }
});

// 404 not found handler
app.use((req, res, next) => {
  res.send('<h1> PAGE NOT FOUND </h1>');
});

// Custom error handler
app.use((err, req, res, next) => {
  console.log(err);
  console.log('We have an error!!!!!!!');
  res.status(500).send('<h1>This is our error page</h1>');
});

app.listen(port, async () => {
  // force: true drops the tables and re-creates them
  await db.sync();
  console.log(`Example app listening on port ${port}!`);
});
