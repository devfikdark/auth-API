const InstagramStrategy = require('passport-instagram').Strategy;

module.exports = (passport) => {
  // used to serialize the user for the session
  passport.serializeUser((user, cb) => {
    cb(null, user);
  });
  
  // used to deserialize the user
  passport.deserializeUser((user, cb) => {
   cb(null, user);
  });

  // Instagram 
  passport.use(new InstagramStrategy(
    {
      clientID: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
      callbackURL: process.env.INSTAGRAM_CALLBACK_URL
    },
    function(token, refreshToken, profile, cb) {
      console.log(profile);
      let user = {};
      process.nextTick(() => {
        user.name = profile._json.name;
        user.email = profile._json.email;
        user.picture = profile.photos[0].value;
        user.socialName = "Instagram";
        user.socialImg = "./img/instagram.jpg";
        return cb(null, user);
      });
    }
  ));
};