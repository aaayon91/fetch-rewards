let transactions = []
// let arrangedTrans = []

module.exports ={
    index,
    // show,
    new: newTransaction,
    create,
    // delete: deleteTodo,
    // edit
};

function newTransaction(req, res) {
    console.log('date', Date.now().toString())
    res.render('transactions/new')
}

function index(req, res) {
    // transactions = transactions.sort(function(a,b){
    //     return new Date(a.timestamp) - new Date(b.timestamp);
    //   });
    console.log('Sorted Transactions', transactions)
    res.render('transactions/index', {
        transactions,
    })
}

function create(req, res) {
    // For sorting transactions on submit:
    let idx = 0;
    if (transactions.lengt === 0) transactions.push(JSON.parse(JSON.stringify(req.body)));
    else {
        for (let i = 0; i < transactions.length; i++) {
            if (new Date(transactions[i].timestamp) <= new Date(req.body.timestamp)) {
                idx = i + 1;
            }
        }
        transactions.splice(idx, 0, JSON.parse(JSON.stringify(req.body)));
    }
    res.redirect('/transactions')
}