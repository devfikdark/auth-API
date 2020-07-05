let express = require('express');
let router = express.Router();
let { 
  callFacebookAuth, 
  callBackFacebook 
} = require('./../controllers/userControllers');

// Api call for facebook authentication
router
  .get('/' ,callFacebookAuth,         
    (req, res)=>{}
  );

// Api call back function
router
  .get('/callback', callBackFacebook,
    (req, res)=>{
      return res.send("Congrats");
    }
  );

module.exports = router;