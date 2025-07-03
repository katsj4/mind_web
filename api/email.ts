import nodemailer from 'nodemailer';

const emailUser = process.env.EMAIL_FROM;
const emailPass = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

export const sendSubscriptionEmails = async (subscriberEmail: string) => {
  const adminEmail = process.env.EMAIL_TO;

  // Email to Admin
  const adminMailOptions = {
    from: emailUser,
    to: adminEmail,
    subject: 'New Mindset Subscriber',
    text: `A new user has subscribed to Mindset: ${subscriberEmail}`,
  };

  // Email to Subscriber
  const userMailOptions = {
    from: emailUser,
    to: subscriberEmail,
    subject: 'Welcome to Mindset 💙',
    text: `Hi there,\n\nThank you for subscribing to Mindset! We're excited to have you on board.\n\nStay well,\nMindset Team`,
  };

  await transporter.sendMail(adminMailOptions);
  await transporter.sendMail(userMailOptions);
};
