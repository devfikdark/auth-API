let express = require('express');
let app = express();
let userRouter = require('./router/userRouter');

app.use(express.json());

app.use('/api/user', userRouter);

module.exports = app;