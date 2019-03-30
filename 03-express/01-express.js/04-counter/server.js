const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const port = process.env.PORT || 8000;
const app = express();



app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'session',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.get("/", function(request, response){
    
   
    if(!request.session.count){
        request.session.count = 1;

    } else{
        request.session.count++;
    }
    response.render('index', {count: request.session.count})
});

app.post('/new', function(request, response){

    if(!request.session.count){
        request.session.count = 1;

    } else{
        request.session.count++;
    }
    response.redirect('/');
    
});

app.post('/delete', function(request, response){

    request.session.destroy();

    response.redirect('/');
    
});


app.listen(port,() => console.log(`Express server listening on`+ port));
