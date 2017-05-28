var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs(process.env.MONGODB_URI, ['beshvili']);

let verify = function(req, res, next) {
  console.log(req.signedCookies);
  const authorized = JSON.parse(process.env.AUTHORIZED);
  const authenticated = authorized.indexOf(req.signedCookies.admin) >= 0;
  if (authenticated) {
    console.log("Authenticated request");
    next();
  }
  else {
    console.log("Unauthenticated access");
    res.redirect('/');
  }
}
router.use('/', verify);

router.use('/', require('./sapi/blog'));
router.use('/', require('./sapi/author'));

module.exports = router;
