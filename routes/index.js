'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('/client/index.html');
});

router.use('/admin/', require('./admin'));

module.exports = router;