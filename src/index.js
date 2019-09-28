import '@babel/polyfill';
import "dotenv/config";
import express from 'express'; // const express = require('express');
import mongoose from 'mongoose';

// Importing routes
import UsersRouter from './routes/users';
import GenresRouter from './routes/genres';
import DirectorRouter from './routes/directors';
import StudiosRouter from './routes/studios';
import ActorsRouter from './routes/actors';
import MoviesRouter from './routes/movies';
import AuthRouter from './routes/auth';

// Middlewares
import AuthMiddleware from './middlewares/auth.middleware';

// Defining port
const PORT = process.env.PORT || 3000;

// Creating a express application
const app = express();

// Adding middlewares for parse incoming data from requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Register routes
app.use('/auth', AuthRouter);
app.use('/users', AuthMiddleware, UsersRouter);
app.use('/genres', AuthMiddleware, GenresRouter);
app.use('/directors', AuthMiddleware, DirectorRouter);
app.use('/studios', AuthMiddleware, StudiosRouter);
app.use('/actors', AuthMiddleware, ActorsRouter);
app.use('/movies', AuthMiddleware, MoviesRouter);

// Connecting to Mongo Service
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
}, (err) => {
  if (err) throw err;
  // Mounting the app on specific port
  app.listen(PORT, () => {
    console.log(`Rating Movies API is listening in port ${PORT}`);
  });
});
