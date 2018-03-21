var express = require('express');
var app = express();

var dbInit = require('./data-store');
var db = dbInit();

app.use('/items', require('./api/routes/item.routes'));
app.use('/orders', require('./api/routes/order.routes'));
app.use('/order-items', require('./api/routes/order-item.routes'));

var server = app.listen(3000, () => console.log('Example app listening on port 3000!'));

