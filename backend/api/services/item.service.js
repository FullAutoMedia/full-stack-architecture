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

exports.update = (item, callback) => {
    var db = new sqlite3.Database('./data-store/demo.db');
    var sql = "UPDATE items SET name ='" + item.name + "' where id=" + item.id;

    db.run(sql, function(err) {
        if (err) {
            callback(err, null);
        } else {
            callback(err, item);
        }        
    });

    db.close();
}

exports.delete = (itemId, callback) => {
    var db = new sqlite3.Database('./data-store/demo.db');
    var sql = "DELETE FROM items where id=" + itemId;

    db.run(sql, function(err) {
        callback(err);       
    });

    db.close();
}