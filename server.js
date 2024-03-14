import fetch from 'node-fetch';
import cors from 'cors'
import express from 'express';

const app = express();

app.use(cors())

app.get('/pets/pets', async (req, res) => {
    try {
        const response = await fetch('https://biggamesapi.io/api/collection/Pets');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.get('/pets/rap', async (req, res) => {
    try {
        const response = await fetch('https://biggamesapi.io/api/rap');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});