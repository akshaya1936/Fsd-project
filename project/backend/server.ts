import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.PORT || 5001;

mongoose.connect('mongodb://localhost:27017/jobportal', {
  serverSelectionTimeoutMS: 5000,
})
.then(() => {
  console.log('Connected to MongoDB');
  // Log the collections to verify database content
  mongoose.connection.db.listCollections().toArray((err, collections) => {
    if (err) console.error('Error listing collections:', err);
    else console.log('Available collections:', collections.map(c => c.name));
  });
})
.catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});