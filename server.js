const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Serve static files (images, sounds, etc.)
app.use(express.static(path.join(__dirname, '.')));

// Serve index.html on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;
        const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
            model: "google/gemini-2.0-flash-001",
            messages: messages,
        }, {
            headers: {
                'Authorization': \Bearer \\,
                'HTTP-Referer': 'https://vercel.com', 
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
    console.log(\Proxy server running on port \\);
});