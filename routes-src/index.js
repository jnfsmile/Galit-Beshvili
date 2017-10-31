var express = require('express');
var router = express.Router();

router.use('/admin/', require('./admin'));

/* GET home page. */
if(process.env.ENV !== "dev") {
  router.use(express.static('/client/src/index.html'));
} else {
  router.use(express.static('/client/index.html'));
}

module.exports = router;
