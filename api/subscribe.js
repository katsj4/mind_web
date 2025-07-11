import express from 'express';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config(); // Load environment variables

const router = express.Router();

router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Valid email is required.' });
  }
console.log({
  from: process.env.EMAIL_FROM,
  to: email,
  adminTo: process.env.EMAIL_TO,
  usingPassword: process.env.EMAIL_PASSWORD ? 'yes' : 'no',
});

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM?.trim(),
        pass: process.env.EMAIL_PASSWORD?.trim(),
      },
    });

    // Send welcome email to subscriber
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
  } catch (err) {
    console.error('Email sending error:', err.message);
    res.status(500).json({ error: 'Failed to send subscription emails' });
  }
});

export default router;
