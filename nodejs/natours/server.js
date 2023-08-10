const mongoose = require('mongoose');
require('dotenv').config();

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('uncaughtException , SHUTTING DOWN......... ');
  process.exit(1);
});

// dotenv.config({ path: './config.env' }); //those should be before the app
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)

mongoose
  .connect(DB, {
    // .connect(process.env.DATABASE_local){} //this is locally way
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    // console.log(con.connection),
    console.log('DB connection successfully');
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`the app running on port ${port}....`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION , SHUTTING DOWN......... ');
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});

