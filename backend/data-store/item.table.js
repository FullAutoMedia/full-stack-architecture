var sqlite3 = require('sqlite3');

exports.create = () => {
    var db = new sqlite3.Database('./data-store/demo.db');

    db.serialize(() => {
        db.run("CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY, name TEXT, auditUser TEXT, auditTimestamp)");

        //testing
        // db.run("DELETE from items");

        // var stmt = db.prepare("INSERT INTO items(id, name, auditUser, auditTimestamp) VALUES (?, ?, ?, ?)");
        // for (var i = 0; i < 5; i++) {
        //     stmt.run(i, "Ipsum " + i, "audit" + i, new Date());
        // }
        // stmt.finalize();
        
        // db.each("SELECT rowid as id, info FROM orders", function(err, row) {
        //     console.log(row.id + ": " + row.info);
        // });        
    });

    db.close();
};