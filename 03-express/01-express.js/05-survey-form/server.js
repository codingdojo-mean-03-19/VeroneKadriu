const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const port = process.env.PORT || 8000;
const app = express();



app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'session',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.get("/", function(request, response){

    response.render('index');
});

app.post('/success', function(request, response){

    
    request.session.name = request.body.name;
    request.session.location = request.body.location;
    request.session.language = request.body.language;
    request.session.comment = request.body.comment;

    response.render('success',{name: request.session.name, location: request.session.location, language: request.session.language, comment: request.session.comment} );


    


   
    
});




app.listen(port,() => console.log(`Express server listening on `+ port));
