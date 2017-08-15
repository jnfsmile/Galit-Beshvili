require("dotenv").config();

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs(process.env.MONGODB_URI, ['beshvili']);

/* POST/SAVE a tag */
router.post('/tag', function(req, res, next) {
  var tag = req.body;
  db.tags.save(tag, function(err, result) {
    if (err) {
      console.log(err);
      res.send("save failed");
    } else {
      res.json(result);
    }
  })
});
/* PUT/UPDATE a tag */
router.put('/tag/:id', function(req, res, next) {
  var tag = req.body;
  console.log(req.body);
  var updObj = {};

  if (tag.name) {
    updObj.name = tag.name;
  }

  if (!updObj) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    console.log(req.params.id);
    db.tags.update({
    _id: mongojs.ObjectId(req.params.id)
    }, updObj, {}, function(err, result) {
      if (err) {
        console.log(err);
      res.send("update failed");
      } else {
      res.json(result);
      }
    });
  }
});
/* DELETE a tag */
router.delete('/tag/:id', function(req, res) {
  db.tags.remove({
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
