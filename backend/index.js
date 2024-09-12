import express from 'express';
import connectDB from './config/db.js';
import nasaDataRoutes from './routes/nasaDataRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use('/nasa-data', nasaDataRoutes);

app.listen(port, () => console.log(`***Server running on port ${port}***`));