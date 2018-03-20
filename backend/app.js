var express = require('express'),
  model = require('./model/model'),
  app = express(),
  db = model();

app.get('/diag', (req, res) => res.send('Hello World!'))

app.use('/orders', require('./view/order'))
app.use('/order-items', require('./view/order-item'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))