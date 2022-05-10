let transactions = [];
let pointsObj = {};

module.exports ={
    getAll,
    create,
};

function getAll() {
    return {transactions, pointsObj}
}

function create(transaction) {
    console.log('transaction', transaction)
    let idx = 0;
    if (transactions.lengt === 0) transactions.push(JSON.parse(JSON.stringify(transaction)));
    else {
        for (let i = 0; i < transactions.length; i++) {
            if (new Date(transactions[i].timestamp) <= new Date(transaction.timestamp)) {
                idx = i + 1;
            }
        }
        transactions.splice(idx, 0, JSON.parse(JSON.stringify(transaction)));
    }
    pointsObj[transaction.payer] ? pointsObj[transaction.payer] += parseInt(transaction.points) : pointsObj[transaction.payer] = parseInt(transaction.points);
}