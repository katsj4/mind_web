// email.ts (or subscribeController.ts)

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export async function sendSubscriptionEmail(userEmail: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Email to Mindset admin
  const adminMsg = {
    from: `"Mindset Subscriptions" <${process.env.EMAIL_FROM}>`,
    to: 'maindcet@gmail.com',
    subject: 'New Subscription Alert',
    text: `A new user subscribed: ${userEmail}`,
  };

  // Email to user
  const userMsg = {
    from: `"Mindset" <${process.env.EMAIL_FROM}>`,
    to: userEmail,
    subject: 'Thank you for subscribing to Mindset 💚',
    text: `Hi there,\n\nThanks for subscribing to Mindset! We're excited to support your mental wellness journey.\n\nStay tuned for more tips and support!\n\n– The Mindset Team`,
  };

  try {
    await transporter.sendMail(adminMsg);
    await transporter.sendMail(userMsg);
    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error };
  }
}
