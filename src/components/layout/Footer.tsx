import React, { useState } from 'react';
import { Heart, Instagram, Twitter, Facebook, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();

    if (!email) {
      alert('Please enter your email address.');
      return;
    }

    setLoading(true);

    try {
      // Replace with your real subscription API endpoint
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Subscription failed');

      alert(`Thank you for subscribing to Mindset, ${email}!`);
      setEmail('');
    } catch (error) {
      console.error(error);
      alert('Subscription failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="bg-dark-800 text-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-primary-500 p-2">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-primary-500">Mindset</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Your personalized mental wellness companion, offering expert-guided meditation, stress relief, and motivational content designed for your unique journey.
            </p>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h3 className="font-medium text-gray-300 mb-3">Get wellness tips in your inbox</h3>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:flex-grow bg-dark-900 border border-dark-700 rounded-md px-3 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white font-medium px-4 py-2 rounded-md transition-colors disabled:opacity-50"
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-primary-400 transition-colors">Features</a></li>
              <li><a href="#download" className="text-gray-400 hover:text-primary-400 transition-colors">Download App</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-primary-400 transition-colors">Pricing</a></li>
              <li><a href="#updates" className="text-gray-400 hover:text-primary-400 transition-colors">Updates</a></li>
            </ul>
          </div>

         {/* Support Links */}
<div>
  <h3 className="text-lg font-semibold mb-4">Support</h3>
  <ul className="space-y-3">
    <li>
      <a 
        href="/support#help" 
        className="text-gray-400 hover:text-primary-400 transition-colors"
        onClick={(e) => {
          // If already on support page, prevent default to use smooth scroll
          if (window.location.pathname === '/support') {
            e.preventDefault();
            document.getElementById('help')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Help Center
      </a>
    </li>
    <li>
      <a 
        href="/support#contact" 
        className="text-gray-400 hover:text-primary-400 transition-colors"
        onClick={(e) => {
          if (window.location.pathname === '/support') {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Contact Us
      </a>
    </li>
    <li>
      <a 
        href="/support#community" 
        className="text-gray-400 hover:text-primary-400 transition-colors"
        onClick={(e) => {
          if (window.location.pathname === '/support') {
            e.preventDefault();
            document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Community
      </a>
    </li>
    <li>
      <a 
        href="/support#feedback" 
        className="text-gray-400 hover:text-primary-400 transition-colors"
        onClick={(e) => {
          if (window.location.pathname === '/support') {
            e.preventDefault();
            document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Feedback
      </a>
    </li>
  </ul>
</div>
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-primary-400 transition-colors">Careers</a></li>
              <li><a href="#press" className="text-gray-400 hover:text-primary-400 transition-colors">Press</a></li>
              <li><a href="#partners" className="text-gray-400 hover:text-primary-400 transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-12 pt-8 border-t border-dark-700">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link to="/PrivacyPolicy" className="text-gray-400 hover:text-primary-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-gray-400 hover:text-primary-400 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li><a href="#accessibility" className="text-gray-400 hover:text-primary-400 transition-colors">Accessibility</a></li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 md:mt-0">
              <p className="text-gray-500 mb-4">© 2025 Mindset. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#instagram" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#twitter" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#facebook" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#youtube" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="#email" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
