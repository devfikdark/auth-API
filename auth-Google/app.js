let express = require('express');
let googleConfig = require('./config/googleConfig');
let userRouter = require('./routers/userRouter');

let app = express();

app.use(googleConfig.initialize());

// User Route
app.use('/auth/google', userRouter);

module.exports = app;