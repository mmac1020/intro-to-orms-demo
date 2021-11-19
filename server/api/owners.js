const express = require('express');
const router = express.Router();
const {Owners} = require('../database')
const formatOwners = require('../format/owners')

router.get('/', async (req, res, next) => {
  try {
    const owners = await Owners.findAll();
    res.send(formatOwners(owners));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
