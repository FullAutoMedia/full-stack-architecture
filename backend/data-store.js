var sqlite3 = require('sqlite3').verbose();

module.exports = function() {    
    var db = new sqlite3.Database(':memory:');
    
    db.serialize(function() {
        db.run("CREATE TABLE orders (info TEXT)");
        
        var stmt = db.prepare("INSERT INTO orders VALUES (?)");
        for (var i = 0; i < 10; i++) {
            stmt.run("Ipsum " + i);
        }
        stmt.finalize();
        
        // db.each("SELECT rowid AS id, info FROM orders", function(err, row) {
        //     console.log(row.id + ": " + row.info);
        // });
    });
    
    // db.close();
}