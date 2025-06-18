// File: api/chat.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ reply: 'Missing Gemini API key.' });
  }

  const { messages } = req.body;

  const contents = messages.map((msg: any) => ({
    role: msg.role,
    parts: [{ text: msg.content }],
  }));

  try {
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      { contents }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Gemini did not return a valid response.';

    res.status(200).json({ reply });
  } catch (err: any) {
    console.error('Gemini API error:', err.response?.data || err.message);
    res.status(500).json({ reply: 'Error contacting Gemini API.' });
  }
}
