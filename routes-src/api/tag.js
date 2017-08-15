require("dotenv").config();

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs(process.env.MONGODB_URI, ['beshvili']);

router.get('/tags', function(req, res, next) {
  db.tags.find(function(err, tags) {
    if (err) {
      res.send(err);
    } else {
      res.json(tags);
    }
  });
});
/* GET One blog with the provided ID */
router.get('/tag/:id', function(req, res, next) {
  let validId = typeof(id) !== "undefined" && /^[0-9]+$/.test(id)
  if (validId) {
    db.tags.findOne({
      _id: mongojs.ObjectId(req.params.id)
    }, function(err, tag) {
      if (err) {
          res.send(err);
      } else {
        res.json(tag);
      }
    });
  } else {
    db.tags.find().limit(1).sort({$natural:-1}, function(err, tags) {
      if (err) {
        res.send(err);
      } else if (tags.length == 0) {
        res.send("no entry found");
      } else {
        res.json(tags[0]);
      }
    });
  }
});

module.exports = router;
