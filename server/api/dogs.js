const router = require('express').Router();
const { Dog, Owner } = require('../database');

//EAGER LOADING just means "join"
//select * from users join dogs on dogs.ownerId = owners.id
router.get('/', async (req, res, next) => {
  try {
    const dogs = await Dog.findAll({ include: Owner });
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
    const newDog = await Dog.create(req.body);
    console.log('created new dog', newDog);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
