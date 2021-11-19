const express = require('express');
const router = express.Router();
const {Dog} = require('../database')
const {formatDog, formatDogs} = require('../format/dogs')

router.get('/', async (req, res, next) => {
  try {
    const dogs = await Dog.findAll();
    res.send(formatDogs(dogs));
  } catch (err) {
    next(err);
  }
})

module.exports = router;
