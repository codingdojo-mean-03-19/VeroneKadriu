const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  }
});

module.exports = mongoose.model('Person', personSchema);