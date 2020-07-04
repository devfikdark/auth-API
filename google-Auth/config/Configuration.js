/*
let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20').OAuth2Strategy;
let User = require('./../model/UserModel');

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.

console.log(process.env.CLIENT_ID, process.env.CLIENT_SECRET);

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));
*/

let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20').Strategy;

function extractProfile(profile) {
  console.log(profile);
 
  return {
    name : "morol"
  };
}

passport.use(new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    accessType: 'offline',
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
  },
  (accessToken, refreshToken, profile, cb) => {
    
       cb(null, extractProfile(profile));
}));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
 cb(null, obj);
});

module.exports = passport;