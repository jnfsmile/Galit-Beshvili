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
/* POST/SAVE a blog */
router.post('/blog', function(req, res, next) {
  var blog = req.body;
  if (!blog.text || !(blog.isCompleted + '')) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    db.blogs.save(blog, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    })
  }
});
/* PUT/UPDATE a blog */
router.put('/blog/:id', function(req, res, next) {
  var blog = req.body;
  var updObj = {};
  if (blog.isCompleted) {
  updObj.isCompleted = blog.isCompleted;
  }
  if (blog.text) {
  updObj.text = blog.text;
  }
  if (!updObj) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    db.blogs.update({
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
/* DELETE a blog */
router.delete('/blog/:id', function(req, res) {
  db.blogs.remove({
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
