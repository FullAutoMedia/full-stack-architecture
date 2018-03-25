var sqlite3 = require('sqlite3'),
    itemTable = require('./item.table');

exports.create = () => {  
    var db = new sqlite3.Database('./data-store/demo.db');

    itemTable.create();
}