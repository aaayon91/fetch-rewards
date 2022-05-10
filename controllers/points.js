const Transaction = require('../models/transaction')

module.exports ={
    index,
    spendReq,
    usePoints
};

function index(req, res) {
    res.render('points/index', {
        transactions: Transaction.getAll().transactions,
        pointsObj: Transaction.getAll().pointsObj
    });
}

function spendReq(req, res) {
    res.render('points/spend')
}

function usePoints(req, res) {
    Transaction.spendPoints(parseInt(req.body.points))
    console.log('usePoints');
}