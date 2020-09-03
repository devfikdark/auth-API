const LinkedinStrategy = require('passport-linkedin-oauth2').Strategy;

module.exports = (passport) => {
  // used to serialize the user for the session
  passport.serializeUser((user, cb) => {
    cb(null, user);
  });
  
  // used to deserialize the user
  passport.deserializeUser((user, cb) => {
   cb(null, user);
  });

  // Linkedin 
  passport.use(new LinkedinStrategy(
    {
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: process.env.LINKEDIN_CALLBACK_URL,
      scope: ['r_emailaddress', 'r_liteprofile']
    },
    function(token, refreshToken, profile, cb) {
      let user = {};
      process.nextTick(() => {
        user.name = profile.displayName;
        user.email = profile.emails[0].value;
        user.picture = profile.photos[3].value;
        user.socialName = "Linkedin";
        user.socialImg = "./img/linkedin.jpg";
        return cb(null, user);
      });
    }
  ));
};