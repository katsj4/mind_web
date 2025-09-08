// lib/email.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,   // e.g. Maindcet@gmail.com
    pass: process.env.EMAIL_PASS    // app-specific password
  }
});

export async function sendSubscriptionEmail(subscriberEmail) {
  console.log('💌 sendSubscriptionEmail triggered for:', subscriberEmail);

  const adminEmail = process.env.EMAIL_USER;
  const adminMsg = {
    from: `"Mindset Notifications" <${adminEmail}>`,
    to: adminEmail,
    subject: '🧠 New Subscriber on Mindset!',
    text: `A new user just subscribed: ${subscriberEmail}`,
  };

  const userMsg = {
    from: `"Mindset" <${adminEmail}>`,
    to: subscriberEmail,
    subject: '🎉 Welcome to Mindset!',
    text: `Hi there! Thanks for subscribing to Mindset – your mental wellness journey just got better. We're so glad to have you.`,
  };

  try {
    console.log('📤 Sending admin email...');
    const adminRes = await transporter.sendMail(adminMsg);
    console.log('✅ Admin email sent:', adminRes.messageId);

    console.log('📤 Sending subscriber confirmation...');
    const userRes = await transporter.sendMail(userMsg);
    console.log('✅ Confirmation sent to subscriber:', userRes.messageId);
  } catch (error) {
    console.error('❌ Email sending error:', error);
    throw error;
  }
}
