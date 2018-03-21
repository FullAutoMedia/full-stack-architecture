var express = require('express')
var router = express.Router()
var orderCtrl = require('./../controllers/order.controller');

router
  //create
  .post('/', orderCtrl.create)
  //read - list
  .get('/', orderCtrl.list)
  //read - individual
  .get('/:orderId(\\d+)', orderCtrl.get)
  //update
  .put('/:orderId(\\d+)', orderCtrl.update)
  //delete
  .delete('/:orderId(\\d+)', orderCtrl.delete)

module.exports = router