const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
// const database = require('./database/db');
// database.Dog, database.Owner, database.db
const { Op } = require('sequelize');
const { Dog, Owner } = require('./database/db');
const { formatDogs } = require('./format/dogs');
app.use(morgan('dev'));
//
app.get('/', async (req, res, next) => {
  res.send('<h1> Welcome to the main route! </h1>');
});

/**
 * Write all my routes here
 */
// !!!!!EAGER LOADING!!!!! === "join"
// select * from dogs join owner on dog.ownerId = owners.id
app.get('/dogs', async (req, res, next) => {
  //i try to do some stuff, but i fail
  try {
    const dogs = await Dog.findAll({
      include: Owner,
      where: {
        age: {
          [Op.ne]: 15,
        },
      },
    });
    res.send(formatDogs(dogs));
  } catch (err) {
    next(err);
  }
});

// 404 catch all routes
app.use((req, res) => {
  res.status(404).send('404 NOT FOUND :( ');
});

// custom error handling function
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 ERROR BOO :(');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
