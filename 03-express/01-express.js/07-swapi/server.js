const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const axios = require('axios');
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

const getPeopleData = 'https://swapi.co/api/people';
const getPlanetData = 'https://swapi.co/api/planets';

app.get('/', function(req, res){
    
    res.render('index');
});
app.get('/people/:arg', function(request, res){
   
    let apiCall;
    if (request.params.arg == 'next'){
        apiCall = axios.get(request.session.next);
    } else if (request.params.arg == 'prev'){
        apiCall = axios.get(request.session.previous);
    } else {
        apiCall = axios.get(getPeopleData);
    
    }
    apiCall.then(data=> {
     
        request.session.category = '/people';
        request.session.next = data.data.next;
        request.session.previous = data.data.previous;
      
        res.json(data.data);
    })
    .catch(error => {
        // log the error before moving on!
        
        res.json(error);
    })
});

app.get('/planet/:arg', function(request, res){
    
    let apiCall;
    if (request.params.arg == 'next'){
        apiCall = axios.get(request.session.next);
    } else if (request.params.arg == 'prev'){
        apiCall = axios.get(request.session.previous);
    } else {
        apiCall = axios.get(getPlanetData);
        
    }
    apiCall.then(data => {
        
    
        request.session.category = '/planet';
        request.session.next = data.data.next;
        request.session.previous = data.data.previous;
        
        res.json(data.data);
    })
    .catch(error => {
        
        res.json(error);
    })
});

app.get('/next', function(request, res){
    res.redirect(request.session.category + '/next');
});

app.get('/all', function(request, res){
    res.redirect(request.session.category );
});

app.get('/prev', function(request, res){
    res.redirect(request.session.category + '/prev');
});




app.listen(port,() => console.log(`Express server listening on `+ port));
