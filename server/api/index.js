const express = require('express');
const router = express.Router();

router.use('/dogs', require('./dogs'));
router.use('/owners', require('./owners'));

module.exports = router;
