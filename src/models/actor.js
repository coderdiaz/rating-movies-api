// const mongoose = require('mongoose');
import mongoose from 'mongoose'
const ActorSchema = new mongoose.Schema({
  name: String,
}, {
  timestamps: true,
});

const ActorModel = mongoose.model('Actor', ActorSchema);

// module.exports = ActorModel;
export default ActorModel
