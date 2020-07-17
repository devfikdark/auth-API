module.exports = (app, passport) => {
  app.get('/', (req, res) => {
    res.render('index.ejs');
  });

  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  app.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile.ejs', {
      user: req.user
    });
  });

  // send to google to do the authentication
  // profile gets us their basic information including their name
  // email gets their emails
  app.get('/auth/google', 
    passport.authenticate(
      'google', 
      { scope: ['profile', 'email'] }
    )
  );

  app.get('/auth/google/callback', 
    passport.authenticate(
      'google', 
      {
        successRedirect: '/profile',
        failureRedirect: '/'
      }
  ));

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) 
    return next();
  res.redirect('/');
}