import express from 'express';
import mongoose from 'mongoose';
import Genre from '../models/genre';

const router = express.Router();

//  GET: /
router.get('/', async (req, res) => {
  const genres = await Genre.find().exec();
  return res
    .status(200)
    .json({ data: genres });
});

// GET: /:id
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      statusCode: 400,
      message: `Id is not valid`,
    });
  }

  const genre = await Genre.findById(id).exec();

  if (!genre) {
    return res.status(404).json();
  }

  return res
    .status(200)
    .json(genre);
});

// POST: /
router.post('/', async (req, res) => {
  const { name, description } = req.body;
  // TODO: Add validations

  // Generating a new Genre instance
  const newGenre = new Genre({ name, description });
  await newGenre.save();

  return res
    .status(201)
    .json();
});

// PATCH: /:id
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  // TODO: Add validations

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      statusCode: 400,
      message: 'Id is not valid',
    });
  }

  const genre = await Genre.findByIdAndUpdate(id, {
    $set: { ...body }
  }, { new: true }).exec();

  if (!genre) {
    return res.status(404).json();
  }

  return res
    .status(200)
    .json(genre);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      statusCode: 400,
      message: 'Id is not valid',
    });
  }
  
  await Genre.findByIdAndDelete(id).exec();
  return res.status(200).json();
});

export default router;