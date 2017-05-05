const express = require('express');
const router = express.Router();
const path = require('path');

const google = require('googleapis');
const OAuth2Client = google.auth.OAuth2;

// Client ID and client secret are available at
// https://code.google.com/apis/console
const CLIENT_ID = process.env.GOOGLE_CLIENTID;
const CLIENT_SECRET = process.env.GOOGLE_SECRET;
const REDIRECT_URL = `${process.env.HOST}/admin/post-login`;
const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
// set auth as a global default
google.options({
  auth: oauth2Client
});

router.get('/login', function(req, res, next) {


  // generate consent page url
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
      scope: 'profile email'
  });
  res.redirect(url);

});

router.get('/post-login', function(req, res, next) {

  oauth2Client.getToken(req.query.code, function (err, tokens) {

    if (err) {
      res.send(err);
    }
    oauth2Client.setCredentials(tokens);

    const plus = google.plus("v1");
    // retrieve user profile
    plus.people.get({ userId: 'me' }, function (err, profile) {
      const authorized = JSON.parse(process.env.AUTHORIZED);
      if (err) {
        res.send(err);
        return console.log('An error occured', err);
      }
      if (authorized.indexOf(profile.id) >= 0) {
        res.cookie("admin", profile.id, { path: "/admin", signed: true, httpOnly: true });
        res.send(`${profile.displayName}:${profile.tagline}`);
      }
      else {
        res.clearCookie("admin", { path: "/admin", signed: true, httpOnly: true });
        res.send(`Sorry, ${profile.displayName}, you are unauthorized for this page<br /><a href="/">homepage</a>`);
      }
      console.log(`admin accessed by`, profile);

    });

  });
});

let verify = function(req, res, next) {
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

router.all('*', verify, function (req, res) {
  console.log("admin request");
  const filename = path.join(__dirname, '../client/admin/index.html');
  res.status(200).sendFile(filename, {}, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent admin file successfully');
    }
  });
});

module.exports = router;
