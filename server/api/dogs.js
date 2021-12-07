const router = require('express').Router();
const { Dog, Owner } = require('../database');

router.get('/', async (req, res, next) => {
  try {
    // How do I retrieve all dogs and their owners?
  } catch (err) {
    // What is this line doing again?
    next(err);
  }
});

router.get('/puppies', async (req, res, next) => {
  try {
    // How do I leverage that class method we made?
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    // How do I get a single dog by their id?
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    // How do I create a new dog based on the request body?
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    // how do I update a dog based on their id with the request body?
  } catch (err) {
    next(err)
  }
})

// What is this route trying to accomplish?
router.delete('/:id/:ownerId', async (req, res, next) => {
  try {
    // How do we now accomplish it?
  } catch (err) {
    next(err);
  }
})

module.exports = router;
