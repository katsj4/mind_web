import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Cookies: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 md:p-12 flex justify-center items-start"
      style={{ fontFamily: "'Times New Roman', serif" }}
    >
    <div className="w-[90%] max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-[#008080] hover:underline mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          MINDSET COOKIES AND TRACKING TECHNOLOGIES POLICY
        </h1>
        <p className="text-center text-sm italic text-gray-600 dark:text-gray-400 mb-10">
          Effective Date: june 25,2025 <br />
          Last Updated: june 25,2025
        </p>

        <div className="max-w-none text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
          <p className="mb-6">
            Welcome to Mindset, a platform committed to improving mental health,
            well-being, and productivity. This Cookies and Tracking Technologies
            Policy (<em>“Policy”</em>) outlines how Mindset Technologies Ltd.
            (<strong>“Mindset”</strong>, <strong>“we”</strong>, <strong>“our”</strong>, or
            <strong>“us”</strong>) uses cookies, pixel tags, local storage, device
            identifiers, and similar tracking technologies (collectively,
            <strong>“Technologies”</strong>) across our digital properties, including
            websites, mobile apps, and connected services (collectively, the
            <em>“Services”</em>).
          </p>
          <p className="mb-8">
            We are fully committed to data transparency, user privacy, and
            compliance with applicable data protection laws such as the General
            Data Protection Regulation (GDPR) and Uganda’s evolving data privacy
            and protection frameworks. This policy informs you about what
            Technologies are, why we use them, what types exist, and how you can
            manage your preferences.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Technologies We Use</h2>

          <h3 className="text-xl font-bold mb-3 mt-6">1. Cookies</h3>
          <p className="mb-4">
            Cookies are small text files placed on your device (computer,
            tablet, smartphone) when you visit or use our Services. Cookies
            perform a wide variety of functions such as enabling user
            authentication, maintaining sessions, remembering preferences, and
            helping us understand user behaviour.
          </p>
          <p className="mb-3"><strong>We use two types of cookies:</strong></p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              <strong>Session Cookies:</strong> These exist only during your
              session and are deleted once you close your browser or app.
            </li>
            <li>
              <strong>Persistent Cookies:</strong> These remain on your device
              for a defined period or until you manually delete them. They help
              us remember you and your preferences over time.
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">2. Pixels (Web Beacons)</h3>
          <p className="mb-4">
            Pixels, also called web beacons, are small transparent images
            embedded into webpages or emails. They work in conjunction with
            cookies to:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Determine whether an email has been opened</li>
            <li>Log if a user clicks on a link within an email</li>
            <li>Track activity on web pages to improve engagement analysis</li>
          </ul>
          <p className="mb-6">
            Pixels are typically used in email campaigns or performance
            monitoring dashboards.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">3. Widgets</h3>
          <p className="mb-4">
            Widgets are embedded social media tools or interactive features such
            as Facebook “Like” buttons, Twitter “Tweet” buttons, or LinkedIn
            “Share” buttons. When used, these widgets may:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Collect your IP address</li>
            <li>Know which page of our site you are visiting</li>
            <li>Set a cookie to enable the widget to function correctly</li>
          </ul>
          <p className="mb-8">
            Interaction with these widgets is governed by the privacy policy of
            the third-party provider (e.g., Facebook, LinkedIn).
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-10">Categories of Technologies</h2>

          <h3 className="text-xl font-bold mb-3 mt-6">1. First-Party Technologies</h3>
          <p className="mb-6">
            These are tracking tools directly implemented and controlled by
            Mindset. Examples include cookies that remember your login session,
            language settings, or meditation reminders.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">2. Third-Party Technologies</h3>
          <p className="mb-4">
            These are tracking tools implemented by our trusted service
            providers to help us monitor and improve our Services. These include
            tools for:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Analytics: Understanding how users interact with our platform.</li>
            <li>Crash Reporting: Identifying and fixing bugs.</li>
            <li>Live Chat: Supporting users in real time.</li>
          </ul>
          <p className="mb-4"><strong>Examples of such services:</strong></p>
          <ul className="list-disc list-inside mb-8 space-y-2">
            <li>Google Analytics – Tracks page visits and session duration.</li>
            <li>Firebase – Offers crash reporting and performance insights.</li>
            <li>Crashlytics – Helps identify and resolve app crashes.</li>
            <li>Sentry – Monitors code-level errors in real-time.</li>
            <li>Intercom – Powers our in-app support chat.</li>
          </ul>
          <p className="mb-8">
            We do not control how third parties process the data they collect
            through these technologies. Please review their respective privacy
            policies for more information.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-10">Purpose of Technologies</h2>

          <h3 className="text-xl font-bold mb-3 mt-6">1. Operationally Necessary</h3>
          <p className="mb-4">
            These technologies are essential for the core functionality of our
            Services. They enable:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Secure login and authentication</li>
            <li>Session management across devices</li>
            <li>Protection from fraud or unauthorized access</li>
            <li>Enforcing usage policies</li>
          </ul>
          <p className="mb-8">
            Blocking these may impair your ability to use key features such as
            logging into your account or submitting wellness journal entries.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">2. Performance and Analytics</h3>
          <p className="mb-4">
            Used to analyse and optimize how our Services perform. These help
            us:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Monitor load times</li>
            <li>Understand navigation patterns</li>
            <li>Measure feature adoption</li>
            <li>Identify bugs or errors</li>
          </ul>
          <p className="mb-8">
            Example: Firebase Analytics tells us how many users complete a
            meditation session versus those who exit early.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">3. Functional</h3>
          <p className="mb-4">
            These technologies store your preferences and settings to
            personalize your experience, such as:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Remembering your selected language (e.g., English or French)</li>
            <li>Retaining your progress in breathing or journaling sessions</li>
            <li>Recommending wellness routines based on past entries</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">4. Advertising and Targeting (Optional)</h3>
          <p className="mb-4">
            We do not sell user data to advertisers. However, we may use
            anonymized data to:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Send gentle reminders about focus or meditation exercises</li>
            <li>Inform you about new productivity tools or mental health content</li>
            <li>Deliver feedback based on your previous activities</li>
          </ul>
          <p className="mb-8">
            You have full control over these settings and may opt in or out at
            any time.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-10">Mobile Tracking Technologies</h2>
          <p className="mb-4">In mobile environments, we use additional Technologies:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              Device Identifiers (e.g., IDFA, GAID): Unique IDs assigned by the
              operating system for personalization and analytics.
            </li>
            <li>
              SDKs (Software Development Kits): Embedded code libraries from
              providers such as Firebase and Crashlytics that help us detect
              app crashes, measure performance, and identify usage trends.
            </li>
            <li>
              Local Storage (e.g., Encourage for React Native): Used to store
              simple, non-sensitive information like whether the user has
              completed onboarding.
            </li>
          </ul>
          <p className="mb-4">These tools help us:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Authenticate users securely</li>
            <li>Deliver notifications</li>
            <li>Track meditation session completion rates</li>
          </ul>
          <p className="mb-8">
            Device-level settings on iOS and Android let you limit or opt out of
            these technologies.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-10">Managing Cookie Preferences</h2>
          <p className="mb-4">You can control how cookies and other Technologies are used by:</p>

          <h3 className="text-xl font-bold mb-3 mt-6">1. Cookie Consent Banner</h3>
          <p className="mb-4">
            When you first visit our website, you’ll see a cookie consent banner
            that allows you to:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Accept all cookies</li>
            <li>Customize your cookie preferences</li>
            <li>Reject non-essential cookies</li>
          </ul>
          <p className="mb-8">
            You may update your preferences anytime using the “Cookie Settings”
            link in our footer.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">2. Browser Controls</h3>
          <p className="mb-4">Most modern browsers allow users to:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>View active cookies</li>
            <li>Delete specific or all cookies</li>
            <li>Block cookies from certain websites</li>
            <li>Enable “Do Not Track” requests</li>
          </ul>
          <p className="mb-4">For instructions:</p>
          <ul className="list-disc list-inside mb-8 space-y-2">
            <li>Chrome Help</li>
            <li>Firefox Help</li>
            <li>Safari Help</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">3. Mobile App Settings</h3>
          <p className="mb-4">
            Manage your app-level data collection via your device’s settings:
          </p>
          <ul className="list-disc list-inside mb-8 space-y-2">
            <li>iOS: Settings &gt; Privacy &amp; Security &gt; Tracking</li>
            <li>Android: Settings &gt; Google &gt; Ads &gt; opt out of Ads Personalization</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-10">Third-Party Opt-Outs and DNT</h2>

          <h3 className="text-xl font-bold mb-3 mt-6">Third-Party Opt-Out Links</h3>
          <p className="mb-4">
            You can opt out of interest-based ads from third parties at:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>www.aboutads.info/choices</li>
            <li>www.networkadvertising.org/managing/opt_out.asp</li>
          </ul>
          <p className="mb-6">
            Note: These must be done separately on each browser and device.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Do Not Track (DNT)</h3>
          <p className="mb-8">
            Many web browsers offer a DNT signal. Currently, there is no industry
            standard to respond to these, so our systems do not act on DNT
            signals. Instead, we encourage you to use our manual cookie
            settings.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-10"><b>Data Retention and Policy Updates</b></h2>

          <h3 className="text-xl font-bold mb-3 mt-6">Cookie Lifespans</h3>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Session Cookies: Deleted immediately after closing the browser or app.</li>
            <li>Persistent Cookies: Stored for periods ranging from 30 days to 2 years, depending on purpose.</li>
          </ul>
          <p className="mb-6">
            We regularly review the cookies we use to ensure they are essential
            and lawful.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Updates to This Policy</h3>
          <p className="mb-4">
            <b>We may revise this Policy to reflect:</b>
          </p>
          <ul className="list-disc list-inside mb-8 space-y-2">
            <li>Changes in applicable laws</li>
            <li>Introduction of new Technologies</li>
            <li>Enhancements in data protection</li>
          </ul>
          <p className="mb-8">
           <b>Major updates will be communicated via:</b> 
          </p>
          <ul className="list-disc list-inside mb-10 space-y-2">
            <li>In-app notifications</li>
            <li>Website banners</li>
            <li>Email alerts (if applicable)</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-10"><b>Legal Basis for Using Cookies</b></h2>
          <p className="mb-4">
            We process cookies based on one or more of the following legal
            grounds:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              <strong>User Consent:</strong> For non-essential cookies (analytics, marketing,
              etc.), we obtain your clear, affirmative consent before activation.
            </li>
            <li>
              <strong>Legitimate Interest:</strong> For essential functionalities such as keeping
              users logged in or securing your account.
            </li>
            <li>
              <strong>Compliance with a Legal Obligation:</strong> In rare cases, cookies may be
              used to meet obligations under Ugandan or international data laws.
            </li>
          </ul>
          <p className="mb-8">
            Where required, we maintain records of your consent and provide
            mechanisms to withdraw it at any time.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-10">How Cookies Help Support Mental Health and Productivity</h2>
          <p className="mb-4">
            At Mindset, cookies are not just technical tools—<em>they directly
            support your well-being goals</em>:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              Personalized Reminders: Based on your usage, cookies can gently
              nudge you to journal, meditate, or rest when patterns show stress
              or fatigue.
            </li>
            <li>
              Streak Tracking: They store information about your focus or
              self-care streaks to help you build habits.
            </li>
            <li>
              Mood Insights: Functional cookies retain your past mood entries to
              generate simple charts and reflective prompts that support mental
              clarity.
            </li>
          </ul>
          <p className="mb-8">
            These features are powered by cookies and make your experience more
            meaningful and mindful.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-10">Security and Data Integrity of Cookie Data</h2>
          <p className="mb-4">
            We take data security seriously. To ensure the cookies we place or access are secure:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>We encrypt session tokens and sensitive identifiers.</li>
            <li>We never store passwords, private journal entries, or health assessments in cookies.</li>
            <li>
              Access to cookie data is strictly role-based, monitored, and
              protected by secure protocols (HTTPS/TLS).
            </li>
          </ul>
          <p className="mb-8">
            Our third-party analytics vendors must also comply with similar
            safeguards.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-10">Contact Information</h2>
          <p className="mb-4">
            If you have any questions about this Policy or how we handle
            tracking technologies, please contact us:
          </p>
          <p className="mb-10">
            <b>Mindset Technologies Ltd.</b>
            <br />
            Email: <a href="mailto:mindset@gmail.com" className="text-[#008080] underline">mindset@gmail.com</a>
            <br />
            Website:
            <br />
            Address:
          </p>
          <p className="mb-10">
            If you are located in Uganda:
            <br />
            We operate in accordance with regional and national data protection
            principles, including the Uganda Data Protection and Privacy Act,
            2019.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
