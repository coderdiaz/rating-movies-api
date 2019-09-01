const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
  name: String,
  description: String,
}, {
  timestamps: true,
});

const GenreModel = mongoose.model('Genre', GenreSchema);
module.exports = GenreModel;
