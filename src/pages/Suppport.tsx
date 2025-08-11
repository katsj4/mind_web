import { useEffect, useRef, useState } from 'react';
import { useLocation, } from 'react-router-dom';

const Support = () => {
  const location = useLocation();
  const helpRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    
    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    switch(hash) {
      case 'help':
        scrollToRef(helpRef);
        break;
      case 'contact':
        scrollToRef(contactRef);
        break;
      case 'community':
        scrollToRef(communityRef);
        break;
      case 'feedback':
        scrollToRef(feedbackRef);
        break;
      default:
        window.scrollTo(0, 0);
    }
  }, [location]);

  const toggleItem = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-dark-900 dark:text-white" >
      {/* Hero Section - unchanged */}
      <div className="bg-[#008080] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mindset Support Center</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers, get help, and join our mental wellness community.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Updated Help Center Section */}
        <section ref={helpRef} id="help" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-[#008080] border-b-2 border-[#008080] pb-2">Help Center</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg dark:text-gray-600">
              <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
              <ul className="space-y-3">
                <li className="pb-2 border-b border-gray-200">
                  <button
                    onClick={() => toggleItem('setup-profile')}
                    className="w-full text-left hover:text-[#008080] transition-colors flex justify-between items-center"
                  >
                    <span>How to set up your Mindset profile</span>
                    <span className="text-[#008080] text-lg">
                      {expandedItem === 'setup-profile' ? '−' : '+'}
                    </span>
                  </button>
                  {expandedItem === 'setup-profile' && (
                    <div className="mt-3 pl-2 text-gray-600">
                      <p className="mb-2">1. Download and open the Mindset app</p>
                      <p className="mb-2">2. Tap "Create Account" and enter your details</p>
                      <p className="mb-2">3. Complete the initial wellness assessment</p>
                      <p>4. Customize your profile settings and preferences</p>
                    </div>
                  )}
                </li>
                <li className="pb-2 border-b border-gray-200">
                  <button
                    onClick={() => toggleItem('navigating-app')}
                    className="w-full text-left hover:text-[#008080] transition-colors flex justify-between items-center"
                  >
                    <span>Navigating the Mindset app</span>
                    <span className="text-[#008080] text-lg">
                      {expandedItem === 'navigating-app' ? '−' : '+'}
                    </span>
                  </button>
                  {expandedItem === 'navigating-app' && (
                    <div className="mt-3 pl-2 text-gray-600">
                      <p className="mb-2">• Dashboard: View your daily wellness metrics</p>
                      <p className="mb-2">• Activities: Access guided exercises and tools</p>
                      <p>• Progress: Track your improvement over time</p>
                    </div>
                  )}
                </li>
                <li className="pb-2 border-b border-gray-200">
                  <button
                    onClick={() => toggleItem('wellness-metrics')}
                    className="w-full text-left hover:text-[#008080] transition-colors flex justify-between items-center"
                  >
                    <span>Understanding your wellness metrics</span>
                    <span className="text-[#008080] text-lg">
                      {expandedItem === 'wellness-metrics' ? '−' : '+'}
                    </span>
                  </button>
                  {expandedItem === 'wellness-metrics' && (
                    <div className="mt-3 pl-2 text-gray-600">
                      <p className="mb-2">• Mood: Tracked daily on a 1-10 scale</p>
                      <p className="mb-2">• Stress Levels: Monitored through your inputs</p>
                      <p>• Sleep Quality: Integrated with sleep tracking</p>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg dark:text-gray-600">
              <h3 className="text-xl font-semibold mb-4">Troubleshooting</h3>
              <ul className="space-y-3">
                <li className="pb-2 border-b border-gray-200">
                  <button
                    onClick={() => toggleItem('app-loading')}
                    className="w-full text-left hover:text-[#008080] transition-colors flex justify-between items-center"
                  >
                    <span>App not loading properly</span>
                    <span className="text-[#008080] text-lg">
                      {expandedItem === 'app-loading' ? '−' : '+'}
                    </span>
                  </button>
                  {expandedItem === 'app-loading' && (
                    <div className="mt-3 pl-2 text-gray-600">
                      <p className="mb-2">1. Check your internet connection</p>
                      <p className="mb-2">2. Close and reopen the app</p>
                      <p className="mb-2">3. Restart your device</p>
                      <p>4. Update to the latest version of the app</p>
                    </div>
                  )}
                </li>
                <li className="pb-2 border-b border-gray-200">
                  <button
                    onClick={() => toggleItem('syncing-issues')}
                    className="w-full text-left hover:text-[#008080] transition-colors flex justify-between items-center"
                  >
                    <span>Syncing issues with your data</span>
                    <span className="text-[#008080] text-lg">
                      {expandedItem === 'syncing-issues' ? '−' : '+'}
                    </span>
                  </button>
                  {expandedItem === 'syncing-issues' && (
                    <div className="mt-3 pl-2 text-gray-600">
                      <p className="mb-2">• Ensure you're logged in to your account</p>
                      <p className="mb-2">• Check your internet connection</p>
                      <p>• Pull down on the dashboard to manually refresh</p>
                    </div>
                  )}
                </li>
                <li className="pb-2 border-b border-gray-200">
                  <button
                    onClick={() => toggleItem('notifications')}
                    className="w-full text-left hover:text-[#008080] transition-colors flex justify-between items-center"
                  >
                    <span>Notifications not working</span>
                    <span className="text-[#008080] text-lg">
                      {expandedItem === 'notifications' ? '−' : '+'}
                    </span>
                  </button>
                  {expandedItem === 'notifications' && (
                    <div className="mt-3 pl-2 text-gray-600">
                      <p className="mb-2">1. Check app notification permissions</p>
                      <p className="mb-2">2. Disable "Do Not Disturb" mode</p>
                      <p>3. Verify notification settings in the app</p>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>

          {/* here----------------------------- */}
<div className="text-center mb-8 border-x-1 border-[#008080] mx-auto max-w-max px-8 ">
  <a 
    href="/#faq-section"  // Direct link to homepage's FAQ section
    className="
      text-3xl font-bold text-[#008080] 
      border-b-2 border-t-2 border-[#008080] 
      pb-2 pt-2 px-6
      hover:bg-[#008080] hover:text-white 
      transition-colors duration-300
      block w-full
    "
  >
    Frequently Asked Questions
  </a>
</div>

          {/* ------------------------------------------ */}
        </section>
{/* Contact Us Section */}
        <section ref={contactRef} id="contact" className="mb-20 scroll-mt-20 ">
  <h2 className="text-3xl font-bold mb-8 text-[#008080] border-b-2 border-[#008080] pb-2">Contact Us</h2>
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
      <p className="mb-6">
        Our support team is here to help you with any questions or concerns about the Mindset app.
      </p>
      <div className="space-y-4">
        <div>
          <h3 className='font-medium'>Contact Us Through</h3>
          <h4 className="font-medium">Phone:</h4>
          <a href="tel:+256765125504" className="text-[#008080] hover:underline">+256 765 125 504</a> <a className='text'> / </a> <a href="tel:+256707902530" className="text-[#008080] hover:underline">+256 707 902 530</a>
          <h4 className="font-medium">Email:</h4>
          <a href="mailto:support@mindsetapp.com" className="text-[#008080] hover:underline">support@mindsetapp.com</a>
        </div>
        <div>
          <h4 className="font-medium">Business Hours:</h4>
          <p>Monday - Sunday, 8AM - 10PM EST</p>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 p-6 rounded-lg dark:text-gray-800">
      <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
      <form 
        className="space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const data = Object.fromEntries(formData);
          
          try {
            await fetch('https://formspree.io/f/mailto:Maindcet@gmail.com', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
            alert('Message sent successfully!');
            (e.target as HTMLFormElement).reset();
          } catch (error) {
            alert('Failed to send message. Please try again.');
          }
        }}
      >
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080]" 
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080]" 
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea 
            id="message" 
            name="message"
            rows={4} 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080]"
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="bg-[#008080] text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>

        {/* Community Section */}
        <section ref={communityRef} id="community" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-[#008080] border-b-2 border-[#008080] pb-2">Community</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Join Our Mental Wellness Community</h3>
              <p className="mb-6">
                Connect with others who are on their mental wellness journey. Share experiences, get support, 
                and learn from our community of Mindset users.
              </p>
              <div className="space-y-4">
                <a href="#" className="inline-block bg-[#008080] text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors">
                  Join Our Forum
                </a>
                <a href="#" className="inline-block ml-4 border border-[#008080] text-[#008080] px-6 py-2 rounded-md hover:bg-gray-50 transition-colors">
                  Facebook Group
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg dark:text-gray-900">
              <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
              <ul className="space-y-4">
                <li className="pb-4 border-b border-gray-200">
                  <h4 className="font-medium">Weekly Mindfulness Session</h4>
                  <p className="text-sm text-gray-600">Every Wednesday at 7PM EST</p>
                </li>
                <li className="pb-4 border-b border-gray-200">
                  <h4 className="font-medium">Monthly Q&A with Therapists</h4>
                  <p className="text-sm text-gray-600">First Tuesday of each month at 6PM EST</p>
                </li>
                <li>
                  <h4 className="font-medium">Stress Management Workshop</h4>
                  <p className="text-sm text-gray-600">Coming November 15th</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

       {/* Feedback Section */}
<section ref={feedbackRef} id="feedback" className="mb-20 scroll-mt-20">
  <h2 className="text-3xl font-bold mb-8 text-[#008080] border-b-2 border-[#008080] pb-2">Feedback</h2>
  <div className="max-w-3xl mx-auto">
    <p className="mb-8">
      We value your feedback to help us improve the Mindset app. Please share your thoughts, 
      suggestions, or feature requests with us.
    </p>
    <div className="bg-gray-50 p-6 rounded-lg dark:text-gray-800">
      <form 
        className="space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const data = Object.fromEntries(formData);
          
          try {
            await fetch('https://formspree.io/f/mailto:Maindcet@gmail.com', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                subject: `Feedback: ${data['feedback-type']}`,
                message: data['feedback-message'],
                contactMe: data['contact-me'] ? 'Yes' : 'No'
              }),
            });
            alert('Feedback submitted successfully! Thank you.');
            (e.target as HTMLFormElement).reset();
          } catch (error) {
            alert('Failed to submit feedback. Please try again.');
          }
        }}
      >
        <div>
          <label htmlFor="feedback-type" className="block mb-1">Feedback Type</label>
          <select 
            id="feedback-type" 
            name="feedback-type"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080]"
            required
          >
            <option value="">Select feedback type</option>
            <option value="feature">Feature Request</option>
            <option value="improvement">Improvement Suggestion</option>
            <option value="bug">Bug Report</option>
            <option value="general">General Feedback</option>
          </select>
        </div>
        <div>
          <label htmlFor="feedback-message" className="block mb-1">Your Feedback</label>
          <textarea 
            id="feedback-message" 
            name="feedback-message"
            rows={5} 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080]"
            required
          ></textarea>
        </div>
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="contact-me" 
            name="contact-me"
            className="mr-2" 
          />
          <label htmlFor="contact-me">I'm open to being contacted about this feedback</label>
        </div>
        <button 
          type="submit" 
          className="bg-[#008080] text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  </div>
</section>
       
      </div>
    </div>
  );
};

export default Support;