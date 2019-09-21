// const mongoose = require('mongoose')
import  mongoose from 'mongoose'

const RatingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  score: Number,
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
}, {
  timestamps: true,
})

const RatingModel = mongoose.model('Rating', RatingSchema)
// module.exports = RatingModel
export default RatingModel
