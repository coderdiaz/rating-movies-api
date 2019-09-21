import '@babel/polyfill';
import express from 'express'; // const express = require('express');
import mongoose from 'mongoose';

// Importing routes
import UsersRouter from './routes/users';

// Defining port
const PORT = 3000;

// Creating a express application
const app = express();

// Adding middlewares for parse incoming data from requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Register routes
app.use('/users', UsersRouter);

// Connecting to Mongo Service
mongoose.connect(`mongodb://localhost:27017/rating-movies`, {
  useNewUrlParser: true
}, (err) => {
  if (err) throw err;
  // Mounting the app on specific port
  app.listen(PORT, () => {
    console.log(`Rating Movies API is listening in port ${PORT}`);
  });
});