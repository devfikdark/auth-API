let express = require('express');
let router = express.Router();
let { 
  callGithubAuth, 
  callBackGithub
} = require('./../controllers/userControllers');

// Api call for facebook authentication
router
  .get('/' ,callGithubAuth,         
    (req, res)=>{}
  );

// Api call back function
router
  .get('/callback', callBackGithub,
    (req, res)=>{
      return res.send("Congrats");
    }
  );

module.exports = router;
