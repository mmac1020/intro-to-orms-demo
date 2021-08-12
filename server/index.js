const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

const { db, Dog, Owner } = require('./database/db');

app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
  res.send('<h1> Welcome to the main route! </h1>');
});

app.use((req, res) => {
  res.status(404).send('404 NOT FOUND :( ');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 ERROR BOO :(');
});

app.listen(port, async () => {
  // force: true drops the tables and re-creates them
  await db.sync();
  console.log(`Example app listening on port ${port}!`);
});
