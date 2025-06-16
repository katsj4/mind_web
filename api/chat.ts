// api/chat.ts
import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { messages } = req.body;

  try {
    const chatHistory = messages.map((msg: any) => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    }));

    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: chatHistory,
      }
    );

    const reply =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Sorry, I could not generate a response.';

    res.status(200).json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: 'Something went wrong.' });
  }
}
