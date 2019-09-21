import mongoose from 'mongoose';

const GenreSchema = new mongoose.Schema({
  name: String,
  description: String,
}, {
  timestamps: true,
});

const GenreModel = mongoose.model('Genre', GenreSchema);
export default GenreModel;
