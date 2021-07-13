const express = require('express');
const router = express.Router();

// Every route I define here is going to start with /api
router.use('/dogs', require('./dogs'))
router.use('/owners', require('./owners'))

module.exports = router;
