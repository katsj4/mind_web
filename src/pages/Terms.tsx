import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6 flex flex-col">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-[#008080] hover:underline mb-6 font-medium"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Terms of Service</h1>

      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
        <p>
          Welcome to Mindset. By accessing or using our mobile application and website, you agree
          to be bound by these Terms of Service.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using Mindset's services, you acknowledge that you have read,
          understood, and agree to be bound by these terms.
        </p>

        <h2>2. User Accounts</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account and password.
          You agree to accept responsibility for all activities that occur under your account.
        </p>

        <h2>3. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the service for any illegal purpose</li>
          <li>Share your account credentials</li>
          <li>Attempt to gain unauthorized access</li>
          <li>Interfere with the service's security</li>
        </ul>

        <h2>4. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will notify users of any
          material changes via email or through the application.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions about these Terms, please contact us at:{' '}
          <a href="mailto:terms@mindset.com" className="text-[#008080] underline">
            terms@mindset.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Terms;
