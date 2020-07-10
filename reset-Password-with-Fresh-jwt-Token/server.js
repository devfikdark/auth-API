let dotenv = require('dotenv');
dotenv.config({path: './env/config.env'});
require('./db/connection');

let app = require('./app');

app.listen(process.env.PORT, () => {
  console.log(`app running on this ${process.env.PORT} port`)
})