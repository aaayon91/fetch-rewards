var express = require('express');
var router = express.Router();
const pointsCtrl = require('../controllers/points')

/* GET users listing. */
router.get('/', pointsCtrl.index);

module.exports = router;