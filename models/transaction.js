let transactions = [];

module.exports ={
    getAll,
    create,
    getObj,
    spendPoints
};

function getAll() {
    pointsObj = getObj();
    // return {transactions, pointsObj}
    return {transactions, pointsObj};
}

function create(transaction) {
    transaction = JSON.parse(JSON.stringify(transaction));
    transaction['points'] = parseInt(transaction['points']);
    transaction['timestamp'] = new Date(transaction['timestamp']);
    console.log('transaction', transaction)
    let idx = 0;
    if (transactions.length === 0) transactions.push(transaction);
    else {
        for (let i = 0; i < transactions.length; i++) {
            if (new Date(transactions[i].timestamp) <= new Date(transaction.timestamp)) {
                idx = i + 1;
            }
        }
        transactions.splice(idx, 0, transaction);
    }
    // pointsObj = getObj(transactions);
    // pointsObj[transaction.payer] ? pointsObj[transaction.payer] += parseInt(transaction.points) : pointsObj[transaction.payer] = parseInt(transaction.points);
    console.log('TRANSACTIONS: ', transactions)
}

function spendPoints(points) {
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i]['points'] > 0 && points >= transactions[i]['points']) {
            points = points - transactions[i]['points'];
            transactions[i]['points'] = 0;
            // pointsObj[transactions[i].points] = 0;
        } else if (transactions[i]['points'] > 0 && points < transactions[i]['points']) {
            transactions[i]['points'] = transactions[i]['points'] - points;
            // pointsObj[transactions[i].points] = pointsObj[transactions[i].points] - points;
            points = 0;
        }
    }
    console.log(transactions)
}

//Helper function:
function getObj() {
    let pointsObj = {};
    for (let i = 0; i < transactions.length; i++) {
        pointsObj[transactions[i].payer] ? pointsObj[transactions[i].payer] += parseInt(transactions[i].points) : pointsObj[transactions[i].payer] = parseInt(transactions[i].points);
    }
    return pointsObj;
}