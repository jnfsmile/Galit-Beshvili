var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var api = require('./routes/api');

var app = express();

require('dotenv').config();

// Set the port for this app
let port = process.env.PORT || 8080;

// view engine setup
//app.set('views', path.join(__dirname, 'client'));
//app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '')));
app.use(express.static(path.join(__dirname, 'client')));

app.use('/', index);
app.use('/api/v1/', api);

// 404 catch
app.all('*', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, '/client/index.html'));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var server = app.listen(port, function() {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;
