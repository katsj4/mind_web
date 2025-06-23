import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Cookies: React.FC = () => {
  const navigate = useNavigate();

  const title = 'Cookie Policy';
  const content = `
At Mindset, we use cookies and similar technologies to improve your experience, understand usage, and deliver personalized content. This Cookie Policy explains how and why cookies are used on our website and mobile application.

1. What Are Cookies?
Cookies are small text files stored on your device when you visit a website or use an app. They help us remember your preferences, improve performance, and ensure functionality.

2. How We Use Cookies
- **Essential Cookies**: Enable core functionality like navigation and secure areas.
- **Performance Cookies**: Help us understand how users interact with the app so we can improve it.
- **Functional Cookies**: Remember your preferences and enhance your experience.
- **Analytics and Advertising Cookies**: Provide insights and deliver personalized content and ads based on your behavior.

3. Managing Cookies
You can control and manage cookies through your browser settings. Disabling certain cookies may impact your ability to use some features of Mindset effectively.

4. Third-Party Cookies
We may use third-party services like Google Analytics for insights and performance tracking. These providers may also set cookies in line with their privacy policies.

5. Changes to This Policy
We may update this policy to reflect changes in technology or legal requirements. We encourage you to review it periodically.

For questions or concerns, contact us at privacy@mindset.com.
  `;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 flex flex-col">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-teal-600 hover:text-teal-800 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">{title}</h1>

      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
        {content}
      </div>
    </div>
  );
};

export default Cookies;
