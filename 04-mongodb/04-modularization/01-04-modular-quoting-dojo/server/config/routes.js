const mongoose = require('mongoose');
var quotes = require('../controllers/quotes.js');


      
module.exports = function(app){
    app.get('/', function(request, response) {
        Quote.index(req,res)
    });
      
    app.get('/quotes', function(req, res) {
      Quote.display(req,res)
    });
    
    app.post('/quotes', function(req, res) {
        Quote.create(req,res)
      });

}   