var sqlite3 = require('sqlite3');
var itemService = require('./../services/item.service');

exports.create = (req, res) => {
    var item = req.body;
    itemService.create(item, (err, item) => {
        if (err) {
            res.send(err);
        } else {
            res.send(item);
        }
    });
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
    var item = req.body;
    itemService.update(item, (err, item) => {
        if (err) {
            res.send(err);
        } else {
            res.send(item);
        }
    });
}

exports.delete = (req, res) => {
    var itemId = req.params.itemId;
    itemService.delete(itemId, (err) => {
        if (err) {
            res.send(err);
        } else {
            res.send();
        }
    });
}