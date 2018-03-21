var sqlite3 = require('sqlite3'),
    orderTable = require('./order.table');

exports.create = () => {  
    var db = new sqlite3.Database('./data-store/demo.db');

    orderTable.create();
}