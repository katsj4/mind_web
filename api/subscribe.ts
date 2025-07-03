import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_FROM,        // 'Maindcet@gmail.com'
    pass: process.env.EMAIL_PASSWORD,    // your Gmail App Password
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    // Send email notification to admin
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_FROM, // send to yourself/admin
      subject: 'New Mindset Subscription',
      text: `New subscriber: ${email}`,
    });

    // Send thank you email to subscriber
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank you for subscribing to Mindset!',
      text: `Hi there!\n\nThank you for subscribing to Mindset. We're glad to have you with us on this journey towards wellness and growth.\n\nWarm regards,\nMindset Team`,
    });

    return res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: 'Failed to send emails' });
  }
}
