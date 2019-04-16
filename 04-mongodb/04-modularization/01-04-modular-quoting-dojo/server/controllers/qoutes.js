// All necessary requires, such as the Quote model.
module.exports = {
    index: function(req, res) {
        // code...
       
        res.render('welcome');
   
    },
    create: function(req, res) {
       
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
    
                    
    },
    display: function(req, res) {
        // code...
        Quote.find({}, function(err, quotes) {
            if (err) { console.log(err); }
            res.render('quotes', { quotes: quotes });
          });
        
    }
};
