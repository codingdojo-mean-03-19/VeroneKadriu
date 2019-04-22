const compress = require('compression');
const parser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 8000;
const app = express();


app.use(helmet())
  .use(compress())
  .use(cors())
  .use(logger('dev'))
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }));

require('./server/config/database');

// routes
app.use(express.static( __dirname + '/tasks/dist/tasks' ));
app.use('/tasks', require('./server/config/routes/task.routes'));



app.listen(port, () => console.log(`express listening on port ${ port }`));