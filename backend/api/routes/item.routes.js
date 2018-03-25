var express = require('express')
var router = express.Router()
var itemCtrl = require('./../controllers/item.controller')

router
  //create
  .post('/', itemCtrl.create)
  //read - list
  .get('/', itemCtrl.list)
  //update
  .put('/', itemCtrl.update)
  //delete
  .delete('/:itemId(\\d+)', itemCtrl.delete);

module.exports = router