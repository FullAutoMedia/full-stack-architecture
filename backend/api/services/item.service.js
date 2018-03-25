var sqlite3 = require('sqlite3');

exports.create = (item, callback) => {
    var db = new sqlite3.Database('./data-store/demo.db');
    var sql = "INSERT INTO items(name, auditUser, auditTimestamp) VALUES ('" + item.name + "', 'aa', null)";

    db.run(sql, function(err) {
        if (err) {
            callback(err, null);
        } else {
            callback(err, { id: this.lastID });
        }        
    });

    db.close();
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