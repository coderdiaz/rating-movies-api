import mongoose from 'mongoose';

const StudioSchema = new mongoose.Schema({
  name: String,
  description: String,
}, {
  timestamps: true,
});

const StudioModel = mongoose.model('Studio', StudioSchema);
export default StudioModel;
