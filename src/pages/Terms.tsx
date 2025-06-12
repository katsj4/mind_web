import React from 'react';
import { motion } from 'framer-motion';

export const Terms: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 max-w-4xl"
    >
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Terms of Service</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Welcome to Mindset. By accessing or using our mobile application and website, you agree to be bound by these Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">1. Acceptance of Terms</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          By accessing and using Mindset's services, you acknowledge that you have read, understood, and agree to be bound by these terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">2. User Accounts</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">3. Acceptable Use</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          You agree not to:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-400">
          <li>Use the service for any illegal purpose</li>
          <li>Share your account credentials</li>
          <li>Attempt to gain unauthorized access</li>
          <li>Interfere with the service's security</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">4. Changes to Terms</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the application.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">Contact</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          If you have any questions about these Terms, please contact us at terms@mindset.com
        </p>
      </div>
    </motion.div>
  );
};