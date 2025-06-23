import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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

      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Privacy Policy</h1>

      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
        <p>
          At Mindset, we take your privacy seriously. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use our mobile application and website.
        </p>

        <h2>Information We Collect</h2>
        <p>We collect information that you provide directly to us when you:</p>
        <ul>
          <li>Create an account</li>
          <li>Use our services</li>
          <li>Contact us for support</li>
          <li>Subscribe to our newsletter</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Personalize your experience</li>
          <li>Improve our services</li>
          <li>Communicate with you</li>
          <li>Ensure security and prevent fraud</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational security measures to protect your
          personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:{' '}
          <a href="mailto:privacy@mindset.com" className="text-[#008080] underline">
            privacy@mindset.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
