var sqlite3 = require('sqlite3');

exports.create = (req, res) => {
    res.send('item create')
}

exports.list = (callback) => {   
    var items; 
    var db = new sqlite3.Database('./data-store/demo.db');

    var sql = "SELECT rowid as id, name, auditUser, auditTimestamp FROM items";
    db.all(sql, (err, rows) => {
        //TODO: do mapping here
        callback(err, rows);
    });

    db.close();
}

exports.update = (req, res) => {
    res.send('item update ' + req.params.itemId)
}

exports.delete = (req, res) => {
    res.send('item delete ' + req.params.itemId)
}