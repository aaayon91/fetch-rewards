const Transaction = require('../models/transaction')

module.exports ={
    index,
};

function index(req, res) {
    res.render('points/index', {
        transactions: Transaction.getAll().transactions,
        pointsObj: Transaction.getAll().pointsObj
    });
}