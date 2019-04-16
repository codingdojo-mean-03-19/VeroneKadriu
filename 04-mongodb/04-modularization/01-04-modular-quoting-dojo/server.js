
    
const bodyParser = require('body-parser');
const express = require("express");
const mongoose = require('mongoose');
const path = require("path");

const port = 8000;


const app = express();


mongoose.connect('mongodb://localhost/quoting_dojo', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected'));



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));



const route = require('./server/config/routes.js')(app);

app.listen(port, () => console.log(`listening on port ${port}`));
