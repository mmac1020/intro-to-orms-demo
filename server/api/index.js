const express = require('express');
const router = express.Router();

// Everything in this file starts with /api
// Whatever requests get into this file. If they also have /dogs, go to the dogs file
router.use('/dogs', require('./dogs'))
router.use('/owners', require('./owners'))

module.exports = router;
