let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function() {
  passport.use(new GoogleStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback"
  }, function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
  }))
}