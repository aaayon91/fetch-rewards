var express = require('express');
var router = express.Router();
const transactionsCtrl = require('../controllers/transactions')

/* GET users listing. */
router.post('/', transactionsCtrl.create)
router.get('/add', transactionsCtrl.add);

module.exports = router;
