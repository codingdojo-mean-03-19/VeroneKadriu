
    
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const {PORT: port = 8000 } = process.env;
const {Schema} = mongoose;
const app = express();

mongoose.connect('mongodb://localhost/message_board', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

const PandaSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String
});

const Panda = mongoose.model('Panda', PandaSchema);

app.get('/', function(request, response){
    Panda.find({})
    .then(pandas => response.render('index', {pandas:pandas}))
    .catch(console.log);
});

app.get('/new', function(request, response){
    response.render('new');
});

app.post('/', function(request, response){
    Panda.create(request.body)
    .then(panda => {
      console.log(panda);
      response.redirect('/')
    })
    .catch(console.log);
});

app.get('/:id', function(request, response){
    Panda.find({ _id: request.params.id })
    .then(panda => {
        console.log(panda);
        response.render('show', { panda: panda[0] })
      })
    .catch(console.log);         
});

app.get('/:id/edit', function(request, response){
    Panda.find({ _id: request.params.id })
    .then(panda => {
        console.log(panda);
        response.render('edit', { panda: panda[0] })
    })
    .catch(console.log);
});

app.post('/:id', function(request, response){
    console.log('body', request.body)
    Panda.update({ _id: request.params.id }, request.body)
    .then(panda=> {
        console.log(panda);
        response.redirect('/')
    })
    .catch(console.log); 
});

app.post('/:id/delete', function(request, response){
    Panda.remove({ _id: request.params.id })
    .then(panda=> {
        console.log(panda);
        response.redirect('/')
    })
    .catch(console.log); 
});

app.listen(port, () => console.log(`listening on port ${port}`));

