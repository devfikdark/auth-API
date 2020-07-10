let dotEnv = require('dotenv');
dotEnv.config({ path: './config/myEnv.env' });
require('./config/dbConfig');
let app = require('./app');

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server run on this port ${port}`);
});
