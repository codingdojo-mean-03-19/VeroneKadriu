var Panda = require('../controllers/panda.js')

module.exports = function (app) {
    app.get('/', function(request, response){
        Panda.index(req, res);
    });
    
    app.get('/new', function(request, response){
        Panda.add(req, res);
    });
    
    app.post('/', function(request, response){
        Panda.create(req, res);
    });
    
    app.get('/:id', function(request, response){
        Panda.show(req, res);      
    });
    
    app.get('/:id/edit', function(request, response){
        Panda.edit(req, res);
    });
    
    app.post('/:id', function(request, response){
        Panda.update(req, res);
    });
    
    app.post('/:id/delete', function(request, response){
        Panda.(req, res);
    });

}