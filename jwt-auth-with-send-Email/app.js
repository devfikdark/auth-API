let express = require('express');
let app = express();
let userRouter = require('./router/userRouter');

// Middleware
app.use(express.json());

// User Route
app.use('/api/user', userRouter);

module.exports = app;