var mongoose = require("../config/mongoose.js");

const PandaSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String,

});

const Panda = mongoose.model('Panda', PandaSchema);

module.exports = Panda;