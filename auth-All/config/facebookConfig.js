const passport = require('passport');

let FacebookStrategy = require('passport-facebook').Strategy;

module.exports = (passport) => {
  // used to serialize the user for the session
  passport.serializeUser((user, cb) => {
    cb(null, user);
  });
  
  // used to deserialize the user
  passport.deserializeUser((user, cb) => {
   cb(null, user);
  });

  // Goggle 
  passport.use(new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL
    },
    function(token, refreshToken, profile, cb) {
      let user = {};
      process.nextTick(() => {
        user.name = profile._json.first_name;
        user.email = profile._json.email;
        user.picture = profile._json.picture;
        user.socialName = "Facebook";
        user.socialImg = "./img/facebook.png";
        return cb(null, user);
      });
    }
  ));
};