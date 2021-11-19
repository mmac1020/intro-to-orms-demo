const express = require('express');
const router = express.Router();
const {Dog, Owner} = require('../database')
const {formatDog, formatDogs} = require('../format/dogs')

// EAGER LOADING --- same thing as a JOIN
router.get('/', async (req, res, next) => {
  try {
    const dogs = await Dog.findAll(
      {
        include: Owner
      }
    );
    res.send(formatDogs(dogs));
  } catch (err) {
    next(err);
  }
})

router.get('/puppies', async (req, res, next) => {
  try {
    const puppies = await Dog.getPuppies();
    res.send(formatDogs(puppies));
  } catch (err) {
    next(err);
  }
})

module.exports = router;
