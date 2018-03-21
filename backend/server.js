var express = require('express');
var app = express();
var datastore = require('./data-store/data-store');

datastore.create();

//routing
app.use('/api/v1/items', require('./api/routes/item.routes'));
app.use('/api/v1/orders', require('./api/routes/order.routes'));
app.use('/api/v1/order-items', require('./api/routes/order-item.routes'));

//launch server
var server = app.listen(3000, () => console.log('Example app listening on port 3000!'));

