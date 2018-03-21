var sqlite3 = require('sqlite3');

exports.create = (req, res) => {
    res.send('order create')
}

exports.list = (req, res) => {    
    var db = new sqlite3.Database('./data-store/demo.db');

    var sql = "SELECT rowid as id, info FROM orders";
    db.all(sql, (err, rows) => {
        res.send(rows);
    });

    db.close();
}

exports.get = (req, res) => {
    res.send('read order ' + req.params.orderId)
}

exports.update = (req, res) => {
    res.send('order update ' + req.params.orderId)
}

exports.delete = (req, res) => {
    res.send('order delete ' + req.params.orderId)
}