require('dotenv').config();

if (process.env.NODE_ENV === "production")
  require ('newrelic');

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const admin = require('./routes/admin');
const api = require('./routes/api');
const sapi = require('./routes/sapi');

const app = express();


// Set the port for this app
const port = process.env.PORT || 8080;

// view engine setup
//app.set('views', path.join(__dirname, 'client'));
//app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);
app.use(logger('dev'));
app.use(function(req, res, next) {
  if(process.env.ENV !== "dev") {
    //The Heroku way to check for https
    if (req.header('x-forwarded-proto') !== 'https') {
        return res.redirect(`https://${req.header('host')}${req.url}`);
      }
  }
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use('/node_modules/', express.static(path.join(__dirname, 'node_modules')));
//app.use(express.static(path.join(__dirname, '')));
app.use('/client', express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'client/dist')));

app.disable('etag');

if (process.env.ENV === "dev")
{
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
    next();
  });
}

app.use('/', index);
app.use('/admin/', admin);
app.use('/api/v1/', api);
app.use('/sapi/v1/', sapi);

// 404 catch
app.all('*', function (req, res, next) {
  let indexPath = '/client/index.html';
  if (process.env.ENV === "dev")
  {
    indexPath = '/client/src/index.html';
  }
  res.status(200).sendFile(path.join(__dirname, indexPath), {}, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent: file');
    }
  });
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
    console.log('App listening at //%s:%s', host, port);
});

module.exports = app;
