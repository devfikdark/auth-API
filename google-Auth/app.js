let express = require('express');
let session = require('express-session')
let passport = require('./config/passport')
let dotEnv = require('dotenv');
dotEnv.config({ path: './env/config.env' });

let app = express();

passport(app);

module.exports = app;