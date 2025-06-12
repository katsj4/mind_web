import React from 'react';
import { motion } from 'framer-motion';

export const PrivacyPolicy: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 max-w-4xl"
    >
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          At Mindset, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">Information We Collect</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          We collect information that you provide directly to us when you:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-400">
          <li>Create an account</li>
          <li>Use our services</li>
          <li>Contact us for support</li>
          <li>Subscribe to our newsletter</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">How We Use Your Information</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-400">
          <li>Provide and maintain our services</li>
          <li>Personalize your experience</li>
          <li>Improve our services</li>
          <li>Communicate with you</li>
          <li>Ensure security and prevent fraud</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">Data Security</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">Contact Us</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          If you have any questions about this Privacy Policy, please contact us at privacy@mindset.com
        </p>
      </div>
    </motion.div>
  );
};