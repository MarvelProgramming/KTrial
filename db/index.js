const mongoose = require('mongoose');
require('dotenv').config();

const dbURI =
  process.env.NODE_ENV === 'production'
    ? '<<production database uri>>'
    : 'mongodb://127.0.0.1:27017';

mongoose
  .connect(dbURI)
  .then(() => {
    console.log('Successfully connected to MongoDB!');
  })
  .catch((e) => {
    console.error('There was an error when connecting to MongoDB:', e);
  });

const db = mongoose.connection;

module.exports = db;