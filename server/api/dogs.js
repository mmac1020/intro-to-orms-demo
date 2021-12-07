const router = require('express').Router();
const { Dog, Owner } = require('../database');

// Include === EAGER LOADING === JOIN
// how do I access this route?
router.get('/', async (req, res, next) => {
  try {
    // How do I retrieve all dogs and their owners?
    const dogs = await Dog.findAll(
      {
        include: [
          { model: Owner}
        ]
      }
    )
    res.json(dogs);
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
    console.log('req body', req.body);
    const newDog = await Dog.create(req.body);
    // Why do I send the new dog back???
    res.json(newDog);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    // DON'T RECOMMEND
    // const dogs = await Dog.update(
    //   req.body,
    //   {
    //     where: {
    //       id: req.params.id
    //     }
    //   }
    // )
    // how do I update a dog based on their id with the request body?
    const dog = await Dog.findByPk(req.params.id);
    await dog.update(req.body);
    res.json(dog);
  } catch (err) {
    next(err)
  }
})

// What is this route trying to accomplish?
router.delete('/:id/:ownerId', async (req, res, next) => {
  try {
    // How do we now accomplish it?
    const dog = await Dog.findByPk(req.params.id);
    // MAGIC METHOD!!!!!!!!!!!!!!!!!!!
    // This log will show you the magic methods
    console.log(Object.getPrototypeOf(dog));
    await dog.removeOwner(req.params.ownerId);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
})

module.exports = router;
