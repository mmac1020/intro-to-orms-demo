const router = require('express').Router();
const { Dog, Owner } = require('../database');

// How do I hit these routes?
// Everything in this file starts with /api/dogs

//EAGER LOADING just means "join"
//select * from users join dogs on dogs.ownerId = owners.id
router.get('/', async (req, res, next) => {
  try {
    const dogs = await Dog.findAll(
      {
        include: [
          { model: Owner },
          // { model: OtherThing, as: 'alias'}
        ] });
    dogs[0].sayHello();
    res.json(dogs);
  } catch (err) {
    next(err);
  }
});

router.get('/puppies', async (req, res, next) => {
  try {
    const puppies = await Dog.getPuppies();
    res.json(puppies);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const singlePuppy = await Dog.findByPk(req.params.id);
    res.json(singlePuppy);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    console.log('request body', req.body);
    const newDog = await Dog.create(req.body);
    console.log('created new dog', newDog);
    res.json(newDog);
  } catch (err) {
    next(err);
  }
});

// How would I remove an associated owner from the dog???
// What route do I need and what information needs to be passed to that route?

module.exports = router;
