var express = require('express');
var app = express();
var datastore = require('./data-store/data-store');

datastore.create();

//routing
app.use('/api/v1/items', require('./api/routes/item.routes'));

//launch server
var server = app.listen(3000, () => console.log('Example app listening on port 3000!'));

