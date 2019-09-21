import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  name: String,
  synopsis: String,
  actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }],
  directors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Director' }],
  studios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Studio' }],
  genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true,
});

const MovieModel = mongoose.model('Movie', MovieSchema);
export default MovieModel;
