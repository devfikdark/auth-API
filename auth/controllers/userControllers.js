let googleConfig = require('../config/googleConfig');

// Api call for google authentication
exports.callGoogleAuth =
  googleConfig
    .authenticate(
      'google', 
      {
        scope:['email', 'profile']
      }
    );


// Api call back function
exports.callBackGoogle =
  googleConfig
    .authenticate(
      'google', 
      {
        scope: ['email', 'profile']
      }
    );
