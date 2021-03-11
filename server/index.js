const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const { Dog, Owner } = require('./database/db');
const { formatDogs } = require('./format/dogs');

app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('<h1> Welcome to the main route! </h1>');
});

// EAGER LOADING -- It's like a join
app.get('/dogs', async (req, res, next) => {
  try {
    // Select * from dogs;
    const allDogs = await Dog.findAll({
      include: Owner,
    });
    console.log(allDogs[0].owners);
    res.send(formatDogs(allDogs));
  } catch (err) {
    next(err);
  }
});

// This will be put after all of our routes. So if we ever hit this route we know that we don't have a handler for it. Basically that means it's a 404 not found error
app.use((req, res) => {
  res.status(404).send('404 NOT FOUND :( ');
});

// Custom error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 ERROR BOO :(');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
