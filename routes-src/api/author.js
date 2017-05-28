require("dotenv").config();

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs(process.env.MONGODB_URI, ['beshvili']);

router.get('/authors', function(req, res, next) {
  db.authors.find(function(err, authors) {
    if (err) {
      res.send(err);
    } else {
      res.json(authors);
    }
  });
});
/* GET One author with the provided ID */
router.get('/author/:id', function(req, res, next) {
  db.authors.findOne({
    _id: mongojs.ObjectId(req.params.id)
  }, function(err, authors) {
    if (err) {
      res.send(err);
    } else {
      res.json(authors);
    }
  });
});

module.exports = router;
