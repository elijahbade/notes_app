import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import noteRoutes from './routes/noteRoutes';

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Use routes
app.use('/api', noteRoutes);

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
