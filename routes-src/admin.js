const express = require('express');
const router = express.Router();

const google = require('googleapis');
const OAuth2Client = google.auth.OAuth2;

// Client ID and client secret are available at
// https://code.google.com/apis/console
const CLIENT_ID = process.env.GOOGLE_CLIENTID;
const CLIENT_SECRET = process.env.GOOGLE_SECRET;
const REDIRECT_URL = `${process.env.HOST}/admin/post-login`;

router.get('/login', function(req, res, next) {

  const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

  // generate consent page url
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
      scope: 'profile email'
  });
  res.redirect(url);

});

router.get('/post-login', function(req, res, next) {

  const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

  oauth2Client.getToken(req.query.code, function (err, tokens) {

    if (err) {
      res.send(err);
    }
    oauth2Client.setCredentials(tokens);

    const plus = google.plus("v1");
    // retrieve user profile
    plus.people.get({ userId: 'me', auth: oauth2Client }, function (err, profile) {
      const authorized = JSON.parse(process.env.AUTHORIZED);
      console.log(authorized);
      if (err) {
        res.send(err);
        return console.log('An error occured', err);
      }
      if (authorized.indexOf(profile.id) >= 0)
        res.send(profile.displayName, ':', profile.tagline);
      else {
        res.send(`Sorry, ${profile.displayName}, you are unauthorized for this page<br /><a href="/">homepage</a>`);
      }
      console.log(`admin accessed by`, profile);

    });

  });
});

module.exports = router;
