import express from 'express';
import axios from 'axios';
import cors from 'cors';
import { config } from 'dotenv';

config(); // Load environment variables

const app = express();

// CORS configuration to allow requests from frontend (e.g., localhost:5174)
app.use(cors({
  origin: 'http://localhost:5173', // Adjust to match your frontend port
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
}));

app.use(express.json());

// API key and URL (loaded from .env)
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent';

if (!GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY is not set in .env file. Please add it and restart the server.');
  process.exit(1);
}

app.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request: messages array is required' });
    }

    console.log('Received messages:', messages);
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: messages.map(msg => ({
          role: msg.role || 'user',
          parts: [{ text: msg.content || '' }]
        })),
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    const reply = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!reply) {
      return res.status(500).json({ error: 'No valid response from Gemini API' });
    }

    res.json({ reply });
  } catch (error) {
    console.error('Error details:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    res.status(500).json({ error: 'Failed to get response from Gemini API', details: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});