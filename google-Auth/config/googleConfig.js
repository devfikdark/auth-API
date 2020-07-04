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