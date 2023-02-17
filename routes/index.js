var express = require('express');
var router = express.Router();
var dummyData = require('../data/dummy')

/* GET home page. */
router.get('/:city', function(req, res, next) {
  var queryParams = req.query  
  var pathParams = req.params    
  console.log(queryParams)
  console.log(pathParams)
  res.status(200).send({title: 'express'})
});

module.exports = router;
