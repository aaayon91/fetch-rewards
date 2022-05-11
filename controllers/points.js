const Transaction = require('../models/transaction')

module.exports ={
    index,
    spendReq,
    usePoints
};

function index(req, res) {
    let {transactions, pointsObj, totalPoints} = Transaction.getAll();
    res.render('points/index', {
        transactions,
        pointsObj,
        totalPoints
    });
}

function spendReq(req, res) {
    let {totalPoints, pointsSpentObj} = Transaction.getAll();
    res.render('points/spend', {totalPoints, pointsSpentObj});
}

function usePoints(req, res) {
    Transaction.spendPoints(parseInt(req.body.points));
    res.redirect('/points/spend');
}