var models  = require('../models');
var express = require('express');
var router  = express.Router();
var http = require("https");
const bodyParser = require('body-parser');
const request = require('request');

router.get('/', function(req, res) {

  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.render('index', {
      title: '"'+"Keep a positive mind. Remember, a failed attempt doesn't make you a failure—giving up does"+'"',
      users: users
    });
  });

});



module.exports = router;
