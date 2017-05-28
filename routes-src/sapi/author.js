require("dotenv").config();

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs(process.env.MONGODB_URI, ['beshvili']);

/* POST/SAVE a author */
router.post('/author', function(req, res, next) {
  var author = req.body;
  if (!author.name) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    db.authors.save(author, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    })
  }
});
/* PUT/UPDATE an author */
router.put('/author/:id', function(req, res, next) {
  var authors = req.body;
  var updObj = {};

  if (!updObj) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    db.authors.update({
    _id: mongojs.ObjectId(req.params.id)
    }, updObj, {}, function(err, result) {
      if (err) {
      res.send(err);
      } else {
      res.json(result);
      }
    });
  }
});
/* DELETE an author */
router.delete('/author/:id', function(req, res) {
  db.authors.remove({
    _id: mongojs.ObjectId(req.params.id)
  }, '', function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
