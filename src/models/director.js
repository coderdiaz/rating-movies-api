import mongoose from 'mongoose';

const DirectorSchema = new mongoose.Schema({
  name: String,
}, {
  timestamps: true,
})

const DirectorModel = mongoose.model('Director', DirectorSchema);
export default DirectorModel;
