const express = require('express');
const googleConfig = require('./config/googleConfig');
const userRouter = require('./routers/userRouter');
const ejs = require('ejs');

const app = express();

// EJS
app.set('view engine', 'ejs');

app.use(express.static('./views'));

app.use(googleConfig.initialize());

// User Route
app.use('/auth/google', userRouter);

app.use('/', (req, res) => res.send('index'));

module.exports = app;