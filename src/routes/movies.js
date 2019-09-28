import express from 'express';
import Movie from '../models/movie';

const router = express.Router();

// GET: /
router.get('/',  async (req, res) => {
  const movies = await Movie
    .find()
    .populate('actors', 'name')
    .populate('directors', 'name')
    .populate('studios', 'name')
    .populate('genres', 'name')
    .exec();
  return res.status(200).json({ data: movies });
});

// POST: /
router.post('/', async (req, res) => {
  const {
    name,
    actors,
    synopsis,
    directors,
    studios,
    genres,
  } = req.body;
  // TODO: Add validations

  const newMovie = new Movie({
    name,
    synopsis,
    actors,
    directors,
    studios,
    genres,
  });
  await newMovie.save();

  return res.status(201).json();
});

export default router;
