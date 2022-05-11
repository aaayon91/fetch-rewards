let transactions = [];
let pointsSpentObj = {};

module.exports ={
    getAll,
    create,
    getObj,
    spendPoints
};

function getAll() {
    let {pointsObj, totalPoints} = getObj();
    return {transactions, pointsSpentObj, pointsObj, totalPoints};
}

function create(transaction) {
    transaction = JSON.parse(JSON.stringify(transaction));
    transaction['points'] = parseInt(transaction['points']);
    transaction['timestamp'] = new Date(transaction['timestamp']);
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
}

function spendPoints(points) {
    pointsSpentObj = {};
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i]['points'] > 0 && points >= transactions[i]['points']) {
            pointsSpentObj[transactions[i].payer] ? pointsSpentObj[transactions[i].payer] -= transactions[i].points : pointsSpentObj[transactions[i].payer] = transactions[i].points * (-1);
            points = points - transactions[i]['points'];
            transactions[i]['points'] = 0;
        } else if (transactions[i]['points'] > 0 && points < transactions[i]['points']) {
            pointsSpentObj[transactions[i].payer] ? pointsSpentObj[transactions[i].payer] -= points : pointsSpentObj[transactions[i].payer] = points * (-1);
            transactions[i]['points'] = transactions[i]['points'] - points;
            points = 0;
        } else if (transactions[i]['points'] < 0) {
            pointsSpentObj[transactions[i].payer] ? pointsSpentObj[transactions[i].payer] -= transactions[i]['points'] : pointsSpentObj[transactions[i].payer] = 0;
            points += (transactions[i]['points'] * (-1));
            transactions.splice(i, 1);
            i -= 1;
        }
    }
}

//Helper function:
function getObj() {
    let pointsObj = {};
    let totalPoints = 0;
    for (let i = 0; i < transactions.length; i++) {
        pointsObj[transactions[i].payer] ? pointsObj[transactions[i].payer] += parseInt(transactions[i].points) : pointsObj[transactions[i].payer] = parseInt(transactions[i].points);
    }
    for (const payer in pointsObj) {
        totalPoints += pointsObj[payer];
    }
    return {pointsObj, totalPoints};
}

//Optional way of sorting by date (for reference):
    // transactions = transactions.sort(function(a,b){
    //     return new Date(a.timestamp) - new Date(b.timestamp);
    //   });