import { sendSubscriptionEmail } from "./email";


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    await sendSubscriptionEmail(email);
    return res.status(200).json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Subscription failed. Try again later.' });
  }
}
