import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendSubscriptionEmail(subscriberEmail) {
  // Send email to admin
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: 'New Mindset Subscriber',
    text: `New subscriber: ${subscriberEmail}`,
  });

  // Send confirmation to subscriber
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: subscriberEmail,
    subject: 'Welcome to Mindset!',
    text: `Hello,

Thank you for subscribing to Mindset. We're thrilled to support your wellness journey.

Warm regards,
Mindset Team`,
  });
}
