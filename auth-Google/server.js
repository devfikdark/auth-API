let dotEnv = require('dotenv');
dotEnv.config({ path: './config/myEnv.env' });
// DB connect
require('./config/dbConfig');

let app = require('./app');

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server run on this port: ${port}`);
});