let express = require('express');
let router = express.Router();
let { 
  signUp, logIn, 
  forgotPassword, 
  resetPassword,
  updatePassword,
  protect 
} = require('./../controller/authController');

router.post('/signup', signUp);
router.post('/login', logIn);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);
router.patch('/updateMyPassword', protect, updatePassword);

module.exports = router;
