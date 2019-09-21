const mongoose = require('mongoose');

const DirectorSchema = new mongoose.Schema({
  name: String,
}, {
  timestamps: true,
});

const DirectorModel = mongoose.model('Director', DirectorSchema);
module.exports = DirectorModel;
