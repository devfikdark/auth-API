let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

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
  passport.use(new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    function(token, refreshToken, profile, cb) {
      let user = {};
      process.nextTick(() => {
        user.name = profile._json.name;
        user.email = profile._json.email;
        user.picture = profile._json.picture;
        user.socialName = "Google";
        user.socialImg = "./img/google.jpg";
        return cb(null, user);
      });
    }
  ));
};