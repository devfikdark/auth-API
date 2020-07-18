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

  /*****  Google  ****/
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


  /*****  Facebook  ****/
  // send to facebook to do the authentication
  // profile gets us their basic information including their name
  // email gets their emails
  app.get('/auth/facebook', 
    passport.authenticate('facebook'));

  app.get('/auth/facebook/callback', 
    passport.authenticate(
      'facebook', 
      {
        successRedirect: '/profile',
        failureRedirect: '/'
      }
  ));

  /*****  Github  ****/
  // send to github to do the authentication
  // profile gets us their basic information including their name
  // email gets their emails
  app.get('/auth/github', 
    passport.authenticate('github'));

  app.get('/auth/github/callback', 
    passport.authenticate(
      'github', 
      {
        successRedirect: '/profile',
        failureRedirect: '/'
      }
  ));

  /*****  Linkedin  ****/
  // send to linkedin to do the authentication
  // profile gets us their basic information including their name
  // email gets their emails
  app.get('/auth/linkedin', 
    passport.authenticate('linkedin'));

  app.get('/auth/linkedin/callback', 
    passport.authenticate(
      'linkedin', 
      {
        successRedirect: '/profile',
        failureRedirect: '/'
      }
  ));


  // Logout common
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