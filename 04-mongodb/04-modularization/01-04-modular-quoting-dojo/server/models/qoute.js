var mongoose = require('../config/mongoose')
const QuoteSchema = new mongoose.Schema({
	quote: {type: String, required: true, minlength:10},
	author: {type: String, required: true},
        }, {timestamps: true })
mongoose.model('Quote', QuoteSchema); 
