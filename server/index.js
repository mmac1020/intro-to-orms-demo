const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
  res.send('<h1> Welcome to the main route! </h1>');
});

app.use('/tricky-first-route', require('./api'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
