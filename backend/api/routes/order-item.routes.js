var express = require('express')
var router = express.Router()

var orderIdPrefix = '/:orderId(\\d+)'

router
  //create
  .post('/', (req, res) => {
    res.send('order-item create')
  })
  //read - list
  .get('/', function (req, res) {
    res.send('read all order-items')
  })
  //read - individual
  .get('/:orderItemId(\\d+)', function (req, res) {
    res.send('read order-item ' + req.params.orderItemId)
  })
  //update
  .put('/:orderItemId(\\d+)', (req, res) => {
    res.send('order-item update ' + req.params.orderItemId)
  })
  //delete
  .delete('/:orderItemId(\\d+)', (req, res) => {
    res.send('order-item delete ' + req.params.orderItemId)
  });

module.exports = router