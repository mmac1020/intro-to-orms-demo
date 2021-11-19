const express = require('express');
const router = express.Router();

router.use('/owners', require('./owners'))
router.use('/dogs', require('./dogs'))

module.exports = router;
