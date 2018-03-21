var sqlite3 = require('sqlite3');

exports.create = () => {
    var db = new sqlite3.Database('./data-store/demo.db');

    db.serialize(() => {
        db.run("CREATE TABLE IF NOT EXISTS orders (info TEXT)");

        // var stmt = db.prepare("INSERT INTO orders VALUES (?)");
        // for (var i = 0; i < 5; i++) {
        //     stmt.run("Ipsum " + i);
        // }
        // stmt.finalize();
        
        // db.each("SELECT rowid as id, info FROM orders", function(err, row) {
        //     console.log(row.id + ": " + row.info);
        // });        
    });

    db.close();
};