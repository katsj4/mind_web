// api/chat.ts

import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ reply: 'Missing Gemini API key' });
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
      'No response from Gemini.';

    res.status(200).json({ reply });
  } catch (error: any) {
    console.error('Gemini API Error:', error.response?.data || error.message);
    res.status(500).json({ reply: 'Gemini API Error.' });
  }
}
