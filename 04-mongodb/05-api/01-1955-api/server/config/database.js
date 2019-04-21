
const mongoose    = require('mongoose');


/*
*  require file-system so that we can load, read, require all model files
*/
const fs          = require('fs');

/*
*  utilize path for easy dir/file joining
*/
const path        = require('path');

/*
*  Dir where our models are located
*/
const modelsPath = path.resolve('server', 'models');

/*
*  Regular expression that checks for .js extension
*/
const reg         = new RegExp("\\.js$", "i");

/*
*  database information
*/
const dbURI       = 'mongodb://localhost/1955-api';

/*
* Connect to the database
*/
mongoose.connect(dbURI);

/*
*  utilize global Promise to replace mongoose Promise
*/
mongoose.Promise  = global.Promise;

/*
*  CONNECTION EVENTS
*  When successfully connected
*/
mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection open to ${ dbURI }`);
});

/*
*  If the connection throws an error
*/
mongoose.connection.on('error', err => {
  console.error(`Mongoose default connection error: ${ err }`);

  process.exit(0);
});


/*
*  When the connection is disconnected
*/
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

/*
*  If the Node process ends, close the Mongoose connection
*/
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through program termination');
    process.exit(0);
  });
});

/*
*  read all of the files in the models dir and
*  check if it is a javascript file before requiring it
*/
fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});
