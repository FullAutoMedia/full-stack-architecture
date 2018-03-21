var express = require('express')
var router = express.Router()

router
  //create
  .post('/', (req, res) => {
    res.send('item create')
  })
  //read - list
  .get('/', function (req, res) {
    res.send('read all items')
  })
  //read - individual
  .get('/:itemId(\\d+)', function (req, res) {
    res.send('read item ' + req.params.itemId)
  })
  //update
  .put('/:itemId(\\d+)', (req, res) => {
    res.send('item update ' + req.params.itemId)
  })
  //delete
  .delete('/:itemId(\\d+)', (req, res) => {
    res.send('item delete ' + req.params.itemId)
  });

module.exports = router