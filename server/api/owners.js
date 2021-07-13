const router = require('express').Router();
const { Owner } = require('../database');

// every route in my owners file starts with /api/owners

router.get('/', async (req, res, next) => {
  try {
    const owners = await Owner.findAll();
    res.json(owners);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
