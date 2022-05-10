var express = require('express');
var router = express.Router();
const pointsCtrl = require('../controllers/points')

/* GET users listing. */
router.get('/', pointsCtrl.index);
router.get('/spend', pointsCtrl.spendReq);
router.post('/', pointsCtrl.usePoints)

module.exports = router;