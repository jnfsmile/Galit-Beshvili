require('dotenv').config();

if (process.env.NODE_ENV === "production")
  require ('newrelic');

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const api = require('./routes/api');

const app = express();


// Set the port for this app
const port = process.env.PORT || 8080;

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
app.use('/node_modules/', express.static(path.join(__dirname, 'node_modules')));
//app.use(express.static(path.join(__dirname, '')));
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

var server = app.listen(port, () => {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;