
    
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const {PORT: port = 8000 } = process.env;
const {Schema} = mongoose;
const app = express();

mongoose.connect('mongodb://localhost/mongoose_dashboard', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));



var routes = require('./server/config/routes')(app);

app.listen(port, () => console.log(`listening on port ${port}`));

