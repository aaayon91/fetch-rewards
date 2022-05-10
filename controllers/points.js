const Transaction = require('../models/transaction')

module.exports ={
    index,
    spendReq,
    usePoints
};

function index(req, res) {
    // transactions = Transaction.getAll().transactions;
    // pointsObj = Transaction.getAll().pointsObj;
    // let transactions = Transaction.getAll();
    // let pointsObj = Transaction.getObj();
    let {transactions, pointsObj} = Transaction.getAll();
    // console.log('IMPORTANT TRANSACTIONS', transactions)
    // console.log('IMPORTANT OBJECT', pointsObj)
    res.render('points/index', {
        transactions,
        pointsObj
    });
}

function spendReq(req, res) {
    res.render('points/spend')
}

function usePoints(req, res) {
    Transaction.spendPoints(parseInt(req.body.points))
    res.redirect('/points');
}