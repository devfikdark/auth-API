let express = require('express');
let router = express.Router();
let { 
  callGoogleAuth, 
  callBackGoogle 
} = require('./../controllers/userControllers');

// Api call for google authentication
router
  .get('/' ,callGoogleAuth,         
    (req, res)=>{
      
    }
  );

// Api call back function
router
  .get('/callback', callBackGoogle,
    (req, res)=>{
      return res.send("Congrats");
    }
  );


module.exports = router;