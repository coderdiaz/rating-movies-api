import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';

const router = express.Router();

// POST: /login
router.post('/login', async (req, res) => {
  return res.json({
    token: 'dummy',
  });
});

// POST: /signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  // Verifing if user exists
  const user = await User.findOne({ email }).exec();
  if (user) {
    return res.status(400).json({
      message: 'This email is already taken',
    });
  }

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  await newUser.save();

  const token = await jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: 120 * 60 * 1000,
  });
  return res.json({
    token,
  });
});

export default router;
