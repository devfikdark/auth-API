let app = require('./app');
require('./db/connection');

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server run on this port: ${port}`);
});