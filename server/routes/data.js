var express = require('express');
var router = express.Router();
var path = require('path');

router.post('/input', function(req, res){
  res.send({response: answer});
});

router.get('/input', function(req,res){
  console.log(req.params);

});

module.exports = router;
