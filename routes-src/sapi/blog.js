require("dotenv").config();

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs(process.env.MONGODB_URI, ['beshvili']);

/* GET list of all blogs */
router.get('/blogs', function(req, res, next) {
  db.blogs.find(function(err, blogs) {
    if (err) {
        res.send(err);
    } else {
      res.json(blogs);
    }
  });
});
/* GET a blog post by Id, be it visible or not */
router.get('/blog/:id', function(req, res, next) {
  let id = req.params["id"];
  console.log(id);
  let validId = typeof(id) !== "undefined" && (id.length == 12 || id.length == 24) && /^[0-9a-fA-F]+$/.test(id)
  console.log(validId);
  if (validId) {
    db.blogs.findOne({
      _id: mongojs.ObjectId(req.params.id)
    }, function(err, blog) {
      if (err) {
          res.send(err);
      } else {
        res.json(blog);
      }
    });
  } else {
    db.blogs.find({ visible: true }).limit(1).sort({$natural:-1}, function(err, blogs) {
      if (err) {
        res.send(err);
      } else if (blogs.length == 0) {
        res.send("no entry found");
      } else {
        res.json(blogs[0]);
      }
    });
  }
});
/* POST/SAVE a blog */
router.post('/blog', function(req, res, next) {
  var blog = req.body;
  if (!blog.author) blog.author = "גלית פרידמן";
  if (!blog.title || !blog.body) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    db.blogs.save(blog, function(err, result) {
      if (err) {
        console.log(err);
        res.send("save failed");
      } else {
        res.json(result);
      }
    })
  }
});
/* PUT/UPDATE a blog */
router.put('/blog/:id', function(req, res, next) {
  var blog = req.body;
  console.log(req.body);
  var updObj = {};
  if (blog.title) {
    updObj.title = blog.title;
  }
  if (blog.body) {
    updObj.body = blog.body;
  }
  if (blog.author) {
    updObj.author = blog.author;
  }
  if (blog.authorEmail) {
    updObj.authorEmail = blog.authorEmail;
  }
  if (blog.tags) {
    updObj.tags = blog.tags;
  }
  updObj.visible = blog.visible;
  updObj.lastChange = new Date();

  if (!updObj) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    console.log(req.params.id);
    db.blogs.update({
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
