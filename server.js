const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Proxy endpoint for OpenRouter
app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;

        const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
            model: "google/gemini-2.0-flash-001", // Default model, can be changed
            messages: messages,
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'HTTP-Referer': 'http://localhost:3001', // Required by OpenRouter
                'X-Title': 'Gayoon Game Proxy',
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error calling OpenRouter:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to fetch from OpenRouter' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
