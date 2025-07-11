import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top when page loads
  }, []);


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-10 flex justify-center items-start">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10 max-w-4xl w-full">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-[#008080] hover:underline mb-6 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">
          Terms and Conditions
        </h1>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
          Last updated: June 25, 2025
        </p>

        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 prose-p:leading-relaxed prose-p:mb-4 whitespace-pre-wrap">
          <p>
            Welcome to Mindset, a mobile application and online platform developed and operated in Uganda.
            We are committed to providing accessible and supportive tools for mental wellness, personal growth, and emotional health.
          </p>

          <p>
            Please read the following Terms and Conditions (“Terms”) carefully before using the Mindset mobile app,
            website, or any services we offer. By downloading, registering, or using the Mindset App, you agree to these Terms.
            If you do not agree, do not use the app or services.
          </p>

          <h2><b>Who Can Use Mindset (Eligibility)</b></h2>
          <ul>
            <li>You must be 13 years or older</li>
            <li>If you are below 13, you must have permission from a parent or legal guardian</li>
            <li>You must be legally capable of agreeing to these Terms under Ugandan law</li>
          </ul>

          <p>
            Mindset is intended for individuals seeking mental wellness tools, self-care, and emotional support.
            It is not for emergency or crisis situations.
          </p>

          <h2><b>What Mindset Offers (Services)</b></h2>
          <ul>
            <li>Guided meditation, mindfulness activities, breathing exercises, and journaling tools</li>
            <li>Educational content on stress, anxiety, relationships, and well-being</li>
            <li>Access to licensed mental health professionals (in selected versions or by referral)</li>
            <li>Community interaction (if enabled)</li>
            <li>Content in audio, video, and text formats</li>
          </ul>

          <p>
           <b> ⚠️ Important:</b> Mindset is not a substitute for in-person medical advice, diagnosis, or treatment.
            If you are in danger or having a medical emergency, contact emergency services or visit a hospital.
          </p>

          <h2><b>Your Responsibilities as a User</b></h2>
          <ul>
            <li>Use the app responsibly for personal, non-commercial purposes</li>
            <li>Provide accurate information when creating/updating your account</li>
            <li>Keep your login credentials secure</li>
            <li>Do not post harmful, offensive, or misleading content</li>
            <li>Comply with Ugandan law; do not use the app for illegal activity</li>
          </ul>

          <p>We reserve the right to suspend or delete your account if you violate any part of these Terms.</p>

          <h2><b>Data Security and Privacy</b></h2>
          <p>
            By using Mindset, you accept our Privacy Policy, which outlines how we collect, store, and use personal data.
            We respect your rights under Uganda’s 2019 Data Protection and Privacy Act.
          </p>
          <p>
            We do not sell your data. All information is handled confidentially and in compliance with legal and professional requirements.
          </p>

          <h2><b>Health and Wellbeing Disclaimer</b></h2>
          <p>
            Mindset is not a medical app, though it provides self-help and wellness resources.
            We do not offer clinical diagnoses or prescribe medication.
          </p>
          <p>
            Please consult a certified healthcare professional if you experience severe distress or mental illness.
          </p>

          <h2><b>Intellectual Property and Copyright</b></h2>
          <p><i>All content in Mindset is:</i></p>
          <ul>
            <li>Owned by Mindset Uganda, or</li>
            <li>Licensed by third parties</li>
          </ul>
          <p><i>This includes:</i></p>
          <ul>
            <li>Audio and video</li>
            <li>Articles and exercises</li>
            <li>Logos and branding</li>
            <li>Source code and UI</li>
          </ul>
          <p>You may not copy, modify, or distribute any content without permission.</p>

          <h2><b>Subscriptions and Payments</b></h2>
          <ul>
            <li>Some features are free, others require payment</li>
            <li>Prices are in Ugandan Shillings (UGX)</li>
            <li>Subscriptions auto-renew unless canceled in advance</li>
            <li>Manage your subscription via Google Play or App Store</li>
            <li>No refunds unless legally required</li>
          </ul>

          <h2><b>Account Suspension or Termination</b></h2>
          <ul>
            <li>We may suspend or delete accounts for violating terms or laws</li>
            <li>We may act if other users are harmed</li>
            <li>You may delete your account anytime by emailing us</li>
          </ul>

          <h2><b>Limitation of Liability</b></h2>
          <p>
            Mindset strives to provide accurate, evidence-based content.
            However, individual results vary. We are not liable for misuse or unmet expectations.
            Seek professional help for medical conditions.
          </p>

          <h2><b>Changes to These Terms</b></h2>
          <p>
            We may update these Terms periodically. Continued use means you accept the latest version.
            Changes will be posted in-app and/or sent via email.
          </p>

          <h2><b>Governing Law and Dispute Resolution</b></h2>
          <p>These Terms are governed by Ugandan law.</p>
          <p>
            Disputes should first be resolved informally. If needed, they will be handled by Ugandan courts.
          </p>

          <h2><b>Contact Us</b></h2>
          <p>
            Mindset Uganda Ltd<br />
            Email: <a href="mailto:maindcet@gmail.com" className="text-[#008080] underline">midset@gmail.com</a><br />
            Website: www.mindset.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
