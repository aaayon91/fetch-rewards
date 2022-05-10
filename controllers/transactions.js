module.exports ={
    index,
    // show,
    new: newTransaction,
    create,
    // delete: deleteTodo,
    // edit,
    // update
};

function newTransaction(req, res) {
    res.render('transactions/new')
}

function index(req, res) {
    res.render('transactions/index', {
        // transactions: ,
    })
}

function create(req, res) {
    console.log(req.body)
    
}