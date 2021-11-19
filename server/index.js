const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
  res.send('<h1> Welcome to the main route! </h1>');
});

app.use('/api', require('./api'));

// How do I write a 404 error handler
app.use((req, res, next) => {
  // whatever 404 handling you wanna do
  res.sendStatus(404)
})

// How do I write a custom error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('something went terribly wrong');
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
