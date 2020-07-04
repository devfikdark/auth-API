let express = require('express');
let router = express.Router();
let { 
  callGoogleAuth, 
  callBackGoogle 
} = require('./../controllers/userControllers');

// Api call for google authentication
router
  .get('/' ,callGoogleAuth);

// Api call back function
router
  .get('/callback', callBackGoogle);


module.exports = router;