const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./api'));

app.use((req, res) => {
  res.status(404).send('404 NOT FOUND :( ');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 ERROR BOO :(');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
