require("dotenv").config();

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs(process.env.MONGODB_URI, ['beshvili']);

/* GET Static page with the provided name */
router.get('/static/:name', function(req, res, next) {

  db.static.findOne({
    name: req.params.name
  }, function(err, page) {
    if (err) {
        res.send(err);
    } else {
      res.json(page);
    }
  });

});

module.exports = router;
