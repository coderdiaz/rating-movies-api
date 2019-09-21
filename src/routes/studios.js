import express from 'express';
import mongoose from 'mongoose';
import Studio from '../models/studio';

const router = express.Router();

// GET: /
router.get('/', async (req, res) => {
  const studios = await Studio.find().exec();
  return res
    .status(200)
    .json({ data: studios });
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

  const studio = await Studio.findById(id).exec();

  if (!studio) {
    return res.status(404).json();
  }

  return res
    .status(200)
    .json(studio);
});

// POST: /
router.post('/', async (req, res) => {
  const { name, description } = req.body;
  // TODO: Add validations

  // Generating a new User instance
  const newStudio = new Studio({ name, description });
  await newStudio.save();

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

  const studio = await Studio.findByIdAndUpdate(id, {
    $set: { ...body }
  }, { new: true }).exec();

  if (!studio) {
    return res.status(404).json();
  }

  console.log(studio);

  return res
    .status(200)
    .json(studio);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      statusCode: 400,
      message: 'Id is not valid',
    });
  }
  
  await Studio.findByIdAndDelete(id).exec();
  return res.status(200).json();
});

export default router;