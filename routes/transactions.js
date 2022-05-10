var express = require('express');
var router = express.Router();
const transactionsCtrl = require('../controllers/transactions')

/* GET users listing. */
router.get('/', transactionsCtrl.index);
router.post('/', transactionsCtrl.create)
// router.delete('/:id', transactionsCtrl.delete);
router.get('/new', transactionsCtrl.new);

module.exports = router;
