var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
mongoose.connect('mongodb://localhost/quoting_dojo');
var models = path.join(__dirname, './../models');
fs.readdirSync(models).forEach((file) => {
    if (file.indexOf('.js') >= 0) {
        require(models+ '/' + file);
    }
});