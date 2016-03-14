var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/input', function(req, res){
var firstnumber = parseFloat(req.body.firstnumber);
var anothernumber = parseFloat(req.body.anothernumber);
var operand = req.body.operand;
var answer = 0;

switch (operand){
  case 'add':
  answer = firstnumber + anothernumber;
  break;

  case 'subtract':
  answer = firstnumber - anothernumber;
  break;

  case 'multiply':
  answer = firstnumber * anothernumber;
  break;

  case 'divide':
  answer = firstnumber / anothernumber;
  break;
};

res.send({response: answer});

});

router.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;
