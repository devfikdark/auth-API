let express = require('express');
let facebookConfig = require('./config/facebookConfig');
let userRouter = require('./routers/userRouter');

let app = express();

app.use(facebookConfig.initialize());

app.use('/auth/facebook', userRouter);

module.exports = app;