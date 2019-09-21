const mongoose = require('mongoose');

const StudioSchema = new mongoose.Schema({
  name: String,
  description: String,
}, {
  timestamps: true,
});

const StudioModel = mongoose.model('Studio', StudioSchema);
module.exports = StudioModel;
