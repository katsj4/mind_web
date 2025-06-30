// File: /api/chat.ts

import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent';

const SYSTEM_PROMPT = `
You are Mindset AI, a warm and caring assistant in a mental health and mindset app. Your role is to help users feel emotionally supported.

Mindset is a mobile and web-based platform designed to support mental health, emotional well-being, and daily productivity. It offers tools like guided meditation, journaling, mood tracking, focus timers, and personalized wellness plans.

Instructions:
- Never say it’s an AI or language model.
- Always respond with empathy and kindness.
- Use non-clinical language.
- Be a supportive guide and a good listener.
`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'GEMINI_API_KEY is not configured' });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Missing or invalid messages array' });
    }

    const formattedMessages = [
      {
        role: 'system',
        parts: [{ text: SYSTEM_PROMPT }],
      },
      ...messages.map((msg: any) => ({
        role: msg.role || 'user',
        parts: [{ text: msg.content || '' }],
      })),
    ];

    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: formattedMessages,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const reply =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text || null;

    if (!reply) {
      return res.status(500).json({ error: 'No valid response from Gemini' });
    }

    res.status(200).json({ reply });
  } catch (error: any) {
    console.error('Gemini Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get response from Gemini' });
  }
}
