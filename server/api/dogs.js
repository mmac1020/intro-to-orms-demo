const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  try {
    const dogs = await Dog.findAll();
    res.send(formatDogs(dogs));
  } catch (err) {
    next(err);
  }
})

module.exports = router;
