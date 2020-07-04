let express = require('express');
let googleConfig = require('./config/googleConfig');
let userRouter = require('./routers/userRouter');

let app = express();

app.use(googleConfig.initialize());

// User Route
app.use('/auth/google', userRouter);
/*
// Api call for google authentication
app.get(
  '/auth/google',
  googleConfig.authenticate('google', {scope:['email', 'profile']}),            
  (req,res)=>{}
);

// Api call back function
app.get('/auth/google/callback'
  ,googleConfig.authenticate('google', {scope: ['email', 'profile']}),
  (req,res)=>{
     return res.send("Congrats");
  }
);
*/
module.exports = app;