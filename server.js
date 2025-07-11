import express from 'express';
import axios from 'axios';
import cors from 'cors';
import { config } from 'dotenv';
import nodemailer from 'nodemailer';

config(); // Load .env variables
app.use('/api', subscriberRoutes);
const app = express();

// CORS Setup
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? ['https://your-production-frontend.vercel.app']
  : ['http://localhost:5173'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
}));

app.use(express.json());

// ---------- Gemini AI setup (untouched) ----------
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent';

if (!GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY not set');
  process.exit(1);
}

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages array' });
    }

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
      return res.status(500).json({ error: 'No valid response from Gemini' });
    }

    res.json({ reply });
  } catch (error) {
    console.error('Gemini Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get Gemini response' });
  }
});

// ---------- Email subscription route ----------
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM?.trim(),       // Ensure no space
        pass: process.env.EMAIL_PASSWORD?.trim(),   // Ensure no space
      },
    });

    // Send email to the subscriber
    await transporter.sendMail({
      from: `"Mindset Team" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: '🎉 Thank you for subscribing to Mindset!',
      html: `
        <h2>Welcome to Mindset!</h2>
        <p>Thank you for subscribing. We're excited to support your mental wellness journey.</p>
        <p>- The Mindset Team</p>
      `,
    });

    // Notify admin
    await transporter.sendMail({
      from: `"Mindset Notifications" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: '📥 New Subscriber Alert',
      text: `A new user subscribed with email: ${email}`,
    });

    res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Email sending error:', error.message);
    res.status(500).json({ message: 'Failed to send subscription emails' });
  }
});

// ---------- Start server ----------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});

export default app;
