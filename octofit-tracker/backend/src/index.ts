import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 8000;
const MONGODB_URI = 'mongodb://localhost:27017/octofit';

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'OctoFit Backend is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`OctoFit Backend server running on port ${PORT}`);
});
