var express = require('express')
var router = express.Router()

var orderIdPrefix = '/:orderId(\\d+)'

router
  .get(orderIdPrefix + '/', function (req, res) {
    res.send('all items for order ' + req.params.orderId)
  })
  .get(orderIdPrefix + '/:itemId(\\d+)', function (req, res) {
    res.send('order ' + req.params.orderId + ' item ' + req.params.itemId)
  })
  // .post('/', function (req, res) {
  //   res.send('new item')
  // })
  // .post('/:itemId(\\d+)', function (req, res) {
  //   res.send('update item ' + req.params.itemId)
  // })
  // .delete('/:itemId(\\d+)', function (req, res) {
  //   res.send('delete item ' + req.params.itemId)
  // })

module.exports = router