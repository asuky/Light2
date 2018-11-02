var express = require('express');
var router = express.Router();

let axios = require('axios');
require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', (req, res, next) => {
  axios({
    method: "GET",
    url: "http://"
          + process.env.HUB_IPADDR
          + "/api"
          + process.env.HUB_USERNAME
  })
  .then((response) => {
    res.json(response.data);
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
