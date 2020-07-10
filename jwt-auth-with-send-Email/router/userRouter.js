let express = require('express');
let { 
  signUp, logIn, 
  getAllUser, restrictTo,
  protect 
} = require('./../controller/authController');

let router = express.Router();

router.post('/signup', signUp);
router.post('/login', logIn);

// Protect all routes after this (Only-Admin) middleware
router.use(protect);
router.use(restrictTo('admin'));
router.route('/').get(getAllUser);

module.exports = router;