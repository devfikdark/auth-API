let express = require('express');
let router = express.Router();
let { 
  callGoogleAuth, 
  callBackGoogle 
} = require('../controllers/userControllers');

// Api call for google authentication
router
  .get('/' ,callGoogleAuth,         
    (req, res)=>{});

// Api call back function
router
  .get('/callback', callBackGoogle,
    (req, res)=>{
      res.render('index', { name: res.user });
      //res.json(JSON.parse(res));
    });


module.exports = router;