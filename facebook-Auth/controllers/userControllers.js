let facebookConfig = require('./../config/facebookConfig');

// Api call for facebook authentication
exports.callFacebookAuth =
  facebookConfig
    .authenticate(
      'facebook', 
      {
        scope:['email', 'profile']
      }
    );


// Api call back function
exports.callBackFacebook =
  facebookConfig
    .authenticate(
      'facebook', 
      {
        scope: ['email', 'profile']
      }
    );