var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.json({
    msg: "GET accepted",
    param: req.body
  });
});

router.post('/test', function(req, res, next) {
  res.json({
    msg: "POST accepted",
    param: req.body
  });
});

router.put('/test', function(req, res, next) {
  res.json({
    msg: "PUT accepted",
    param: req.body
  });
});

router.delete('/test', function(req, res, next) {
  res.json({
    msg: "DELETE accepted",
    param: req.body
  });
});


module.exports = router;
