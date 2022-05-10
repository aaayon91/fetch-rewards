const Transaction = require('../models/transaction')

module.exports ={
    add,
    create,
};

function add(req, res) {
    res.render('transactions/add')
}

function create(req, res) {
    Transaction.create(req.body)
    res.redirect('/points')
}

//     // transactions = transactions.sort(function(a,b){
//     //     return new Date(a.timestamp) - new Date(b.timestamp);
//     //   });