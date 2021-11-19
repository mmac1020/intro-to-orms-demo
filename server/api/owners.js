const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const owners = await Owner.findAll();
    res.send(formatOwners(owners));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
