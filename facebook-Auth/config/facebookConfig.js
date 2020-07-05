let passport = require('passport');
let FacebookStrategy = require('passport-facebook').Strategy;
let User = require('./../models/userModel');

async function extractProfile(profile) {
  console.log(profile);

  let userData = {
    googleId: profile._json.sub,
    name: profile._json.name,
    email: profile._json.email,
    profilePhoto: profile._json.picture,
    createAt: Date.now()
  };

  //let oldUser = await User.findOne({ googleId: userData.googleId });

  //if (oldUser) return null;

  //await User.create(userData);
  return "userData";
}

passport.use(new FacebookStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  (accessToken, refreshToken, profile, cb) => {
    cb(null, extractProfile(profile));
  }
));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;