require("dotenv").config();

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs(process.env.MONGODB_URI, ['beshvili']);

router.get('/blogs', function(req, res, next) {
  db.blogs.find(function(err, blogs) {
    if (err) {
      res.send(err);
    } else {
      res.json(blogs);
    }
  });
});
/* GET One blog with the provided ID */
router.get('/blog/:id', function(req, res, next) {
  db.blogs.findOne({
    _id: mongojs.ObjectId(req.params.id)
  }, function(err, blogs) {
    if (err) {
      res.send(err);
    } else {
      res.json(blogs);
    }
  });
});

module.exports = router;
