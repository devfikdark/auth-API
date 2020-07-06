let express = require('express');
let githubConfig = require('./config/githubConfig');
let userRouter = require('./routers/userRouter');

let app = express();

app.use(githubConfig.initialize());

app.use('/auth/github', userRouter);

module.exports = app;
