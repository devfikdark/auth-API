let mongoose = require('mongoose');

// cloud connection-Str
let cloudDB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(process.env.DB_LOCAL, {
//mongoose.connect(cloudDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('DB connect success :)');
}).catch(() => {
  console.log('Something problem to connect DB !!!');
});