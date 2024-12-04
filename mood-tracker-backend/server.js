const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// RapidAPI configuration
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY; // Your RapidAPI key
const RAPIDAPI_HOST = 'chatgpt-42.p.rapidapi.com'; // Confirm this host from RapidAPI documentation

app.get('/', (req, res) => {
    res.send('Mood Tracker API is running.');
});

app.post('/mood', async (req, res) => {
    const { mood, description } = req.body;

    if (!mood || !description) {
        return res.status(400).send({ error: 'Mood and description are required.' });
    }

    try {
        const response = await axios.post(
            `https://${RAPIDAPI_HOST}/chat/completions`,
            {
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: `My mood is ${mood}/5. ${description}` },
                ],
                model: 'gpt-3.5-turbo', // Adjust if RapidAPI specifies another model
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': RAPIDAPI_KEY,
                    'X-RapidAPI-Host': RAPIDAPI_HOST,
                },
            }
        );

        const aiInsights = response.data.choices[0].message.content; // Adjust based on RapidAPI's response structure
        res.send({ insights: aiInsights });
    } catch (error) {
        console.error('Error with RapidAPI:', error.response?.data || error.message);
        res.status(500).send({ error: 'Failed to fetch AI insights.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
