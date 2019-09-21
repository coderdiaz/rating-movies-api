const mongoose = require('mongoose');

const ActorSchema = new mongoose.Schema({
  name: String,
}, {
  timestamps: true,
});

const ActorModel = mongoose.model('Actor', ActorSchema);
module.exports = ActorModel;
