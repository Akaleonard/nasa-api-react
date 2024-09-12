import express from 'express';
import NasaData from '../models/dataModel.js';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
    const date = req.query.date || new Date().toISOString().split('T')[0];

    const existingData = await NasaData.findOne({ date })
    if (existingData) {
        return res.json(existingData);
    }

    try {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${date}`;
        const response = await axios.get(url);

        const newData = new NasaData({
            date: response.data.date,
            title: response.data.title,
            explanation: response.data.explanation,
            url: response.data.url
        })
        await newData.save();

        res.json(newData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data from the NASA API', error})
    }
})

export default router;