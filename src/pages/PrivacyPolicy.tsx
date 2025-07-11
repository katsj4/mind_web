import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();
  
    useEffect(() => {
      window.scrollTo(0, 0); // scroll to top when page loads
    }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-10 flex justify-center items-start">
    <div className="w-[90%] max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-[#008080] hover:underline mb-6 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
          Last updated: June 25, 2025
        </p>

        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 prose-p:leading-relaxed prose-p:mb-4 whitespace-pre-wrap">
          <p>
            We appreciate you selecting MINDSET. We recognize the value of your privacy and share that value with you.
            A thorough description of how Mindset gathers and utilizes personal data may be found below.
            When you use our website, mobile app, and other online services (collectively referred to as the "Services"),
            get in touch with our support staff, connect with us on social media, or engage with us through other channels,
            we gather, use, and share information about you. This Privacy Policy describes how we do this.
            Please be aware that different privacy policies may apply to different Mindset features or sections.
            You will be sent to that particular policy rather than this one if needed.
            This Privacy Policy may be updated periodically.
            When we do, we will revise the effective date at the top of the page.
            In some cases, we may also provide additional notice, such as via in-app notification or email.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following information:</p>
          <p><strong>a. Personal Information</strong></p>
          <ul>
            <li>Name</li>
            <li>Contact details</li>
            <li>Age (optional)</li>
            <li>Email address</li>
          </ul>

          <p><strong>b. Health-Related Information</strong></p>
          <ul>
            <li>Self-assessments or mental wellness scores or surveys</li>
            <li>Journal entries</li>
            <li>Usage patterns like meditation frequency</li>
          </ul>

          <p><strong>c. Technical Data</strong></p>
          <ul>
            <li>Device type and operating system</li>
            <li>IP address (anonymized)</li>
            <li>App usage data</li>
            <li>Users’ location</li>
          </ul>

          <p><strong>d. Optional Third-Party Integrations</strong></p>
          <ul>
            <li>If you link other apps (e.g. Apple Health, Google Fit), we may access limited wellness data with your permission.</li>
            <li>Social media data, if you create or log into your mindset account through a social media service account.</li>
            <li>Cookies. We also collect information when you accept cookies.</li>
            <li>Information you make public</li>
          </ul>

          <h2>Information We Collect When You Use the Services or Interact with Us</h2>
          <ul>
            <li>Usage Information: Information about how you use the app, such as the sessions you attend, the videos and audio you view, the features you use, and other usage trends.</li>
            <li>Transactional Information: Information about your purchases, including product specifications, prices, subscription information, the start and end dates of free trials, and the time and date of transactions.</li>
            <li>Device Information: Details about the device you use to access our services, such as the type of device, operating system and version, mobile network information, and unique device identifiers.</li>
            <li>Communications: We may store records of your interactions with us—such as chat messages, feedback, phone or video calls, and responses during surveys or research—especially when using our chatbot or support tools.</li>
            <li>Login information: Technical logs include your IP address, web browser type, app version, timestamps of access, pages or screens seen, and the page that directed you to our website.</li>
          </ul>

          <h2><b>Use of Information</b></h2>
          <ul>
            <li>To deliver and maintain our services, which includes locating and resolving technical problems.</li>
            <li>To complete orders or subscriptions and handle payments.</li>
            <li>To deliver necessary correspondence, including account updates, purchase confirmations, support replies, and other messages pertaining to services.</li>
            <li>To expand and improve our services, as well as to create new features and products.</li>
            <li>To examine usage trends and patterns, which will aid in our comprehension of user behaviour and service effectiveness.</li>
            <li>To deliver gifts or ask for feedback, as well as to inform you about events, promotions, updates, and new goods and services.</li>
            <li>To safeguard Mindset's users, property, and rights by identifying, looking into, and stopping fraud, abuse, or policy violations.</li>
            <li>To fulfill legal requirements, such as keeping documents for legal, regulatory, or tax purposes.</li>
            <li>To produce aggregated or anonymized data that cannot be traced back to you for reporting, analytics, or service enhancement.</li>
            <li>To hold promotional events, sweepstakes, or contests in which you may choose to take part.</li>
          </ul>

          <h2><b>Disclosures of Information</b></h2>
          <p><b>We may share information about you in the following situations:</b></p>
          <ul>
            <li>With your consent or at your direction</li>
            <li>With third-party service providers</li>
            <li>With advertising and analytics partners</li>
            <li>With legal, financial, and professional advisors</li>
            <li>If required by law or to protect rights</li>
            <li>As part of business transfers</li>
            <li>Between Mindset and our affiliates</li>
            <li>When Mindset is provided by a third party (e.g. school, employer)</li>
            <li>In de-identified or aggregated form</li>
          </ul>

          <h2><b>Advertising and Analytics Services Provided by Others</b></h2>
          <p>We collaborate with third-party partners who offer analytics and advertising services...</p>
          <ul>
            <li>Understand which features or content are most helpful</li>
            <li>Measure the effectiveness of outreach</li>
            <li>Show relevant offers</li>
            <li>Improve service usage</li>
          </ul>

          <h2>Your Choices</h2>
          <ul>
            <li>Manage cookies and ad preferences in-app or via browser</li>
            <li>Limit or disable tracking on mobile devices</li>
          </ul>

          <h2><b>Data Transfer</b></h2>
          <p>Mindset is based in Uganda but may process data internationally. Safeguards include user consent and legal agreements.</p>

          <h2><b>Privacy Rights</b></h2>
          <ul>
            <li>Know, access, correct, delete, or opt out of your data</li>
            <li>Limit processing of sensitive data</li>
          </ul>
          <p>You can exercise these rights by emailing <a href="mailto:midset@gmail.com" className="text-[#008080] underline">midset@gmail.com</a></p>

          <h2><b>Managing Targeted Advertising and Tracking Preferences</b></h2>
          <ul>
            <li>Visit www.mindset.com/optout</li>
            <li>Use the Cookie Preferences Manager</li>
            <li>Enable Global Privacy Control (GPC) in supported browsers</li>
          </ul>

          <h2><b>Verification</b></h2>
          <p>We may request identity verification before processing requests.</p>

          <h2><b>Promotional Communications & Notifications</b></h2>
          <ul>
            <li>Unsubscribe from promotional emails via footer links</li>
            <li>Disable push notifications via device settings</li>
          </ul>

          <h2><b>Data Retention</b></h2>
          <p>We retain personal data only as long as necessary or as required by law.</p>

          <h2><b>Children’s Privacy</b></h2>
          <p>Mindset is for everyone, including children. We do not knowingly collect personal data from minors without permission.</p>

          <h2><b>Advertising & Analytics by Others</b></h2>
          <p>We may allow partners to deliver analytics using cookies and device identifiers. You may opt out as outlined earlier.</p>

          <h2><b>Financial Incentives</b></h2>
          <p>We may offer rewards for surveys or testimonials. Participation is optional, and data is used only for that purpose.</p>

          <h2><b>Changes to This Policy</b></h2>
          <p>We may update this policy. Continued use means you agree to the changes.</p>

          <h2><b>Contact Us</b></h2>
          <p>
            Mindset Team<br />
            Email: <a href="mailto:maindcet@gmail.com" className="text-[#008080] underline">midset@gmail.com</a><br />
            Website: www.mindset.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
