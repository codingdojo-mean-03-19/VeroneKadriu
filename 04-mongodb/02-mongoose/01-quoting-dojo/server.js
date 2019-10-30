const express = require('express'),
const bodyParser = require('body-parser'),
const mongoose = require('mongoose'),
const path = require('path'),
port = 8000,
app = express();


app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/quoting_dojo',  { useNewUrlParser: true });

const quoteSchema = new mongoose.Schema({
  name: String,
  quote: String
});

const Quote = mongoose.model('quotes', quoteSchema);


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('welcome');
});

app.get('/quotes', function(req, res) {

  Quote.find({}, function(err, quotes) {
    if (err) { console.log(err); }
    res.render('quotes', { quotes: quotes });
  });
});

app.post('/quotes', function(req, res) {
  Quote.create(function(err) {
    var quote = new Quote({ name: req.body.name, quote: req.body.quote });

    if (err) {
      console.log('error!', err);


      res.redirect('/');
    } else {
      console.log('successfully');
      res.redirect('/quotes');
    }

  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
