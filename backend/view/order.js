var express = require('express')
var router = express.Router()

router
  .get('/', function (req, res) {
    res.send('all orders')
  })
  .get('/:orderId(\\d+)', function (req, res) {
    res.send('order ' + req.params.orderId)
  })
  // .post('/', function (req, res) {
  //   res.send('new order')
  // })
  // .post('/:orderId(\\d+)', function (req, res) {
  //   res.send('update order ' + req.params.orderId)
  // })
  // .delete('/:orderId(\\d+)', function (req, res) {
  //   res.send('delete order ' + req.params.orderId)
  // })

module.exports = router