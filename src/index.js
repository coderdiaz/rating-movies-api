import '@babel/polyfill';
import express from 'express'; // const express = require('express');

// Defining port
const PORT = 3000;

// Creating a express application
const app = express();

// Adding middlewares for parse incoming data from requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mounting the app on specific port
app.listen(PORT, () => {
  console.log(`Rating Movies API is listening in port ${PORT}`);
});