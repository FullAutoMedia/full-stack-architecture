var express = require('express')
var router = express.Router()

router
  //create
  .post('/', (req, res) => {
    res.send('order create')
  })
  //read - list
  .get('/', function (req, res) {
    res.send('read all orders')
  })
  //read - individual
  .get('/:orderId(\\d+)', function (req, res) {
    res.send('read order ' + req.params.orderId)
  })
  //update
  .put('/:orderId(\\d+)', (req, res) => {
    res.send('order update ' + req.params.orderId)
  })
  //delete
  .delete('/:orderId(\\d+)', (req, res) => {
    res.send('order delete ' + req.params.orderId)
  });

module.exports = router