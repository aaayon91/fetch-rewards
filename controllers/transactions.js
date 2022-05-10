let transactions = [];
let pointsObj = {};

module.exports ={
    index,
    // show,
    add,
    create,
    // delete: deleteTodo,
    // edit
};

function add(req, res) {
    console.log('date', Date.now().toString())
    res.render('transactions/add')
}

function index(req, res) {
    // transactions = transactions.sort(function(a,b){
    //     return new Date(a.timestamp) - new Date(b.timestamp);
    //   });
    console.log('Sorted Transactions', transactions)
    res.render('transactions/index', {
        pointsObj,
        transactions
    });
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
    pointsObj[req.body.payer] ? pointsObj[req.body.payer] += parseInt(req.body.points) : pointsObj[req.body.payer] = parseInt(req.body.points);
    // console.log('pointsObj: ', pointsObj)
    res.redirect('/transactions')
}

// function updateObj(pointsObj) {
//     for (let i = 0; i < transactions.length; i++) {
//         pointsObj[req.body.payer] ? pointsObj[req.body.payer] += req : 
//     }
// }