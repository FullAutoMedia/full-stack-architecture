var sqlite3 = require('sqlite3');
var itemService = require('./../services/item.service');

exports.create = (req, res) => {
    res.send('item create')
}

exports.list = (req, res) => {    
    itemService.list((err, items) => {
        if (err) {
            res.send(err);
        } else {
            res.send(items);
        }
    });


    // res.send(itemService.list());
    // var db = new sqlite3.Database('./data-store/demo.db');

    // var sql = "SELECT rowid as id, name, auditUser, auditTimestamp FROM items";
    // db.all(sql, (err, rows) => {
    //     res.send(rows);
    // });

    // db.close();
}

exports.update = (req, res) => {
    res.send('item update ' + req.params.itemId)
}

exports.delete = (req, res) => {
    res.send('item delete ' + req.params.itemId)
}