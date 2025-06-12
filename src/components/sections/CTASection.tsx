import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '../ui/Button';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-teal-600 relative overflow-hidden" id="download">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Start Your Wellness Journey Today
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Download the Mindset app now and transform your mental health with our expert-guided meditation, stress-relief audio, and personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                className="shadow-lg !rounded-full"
                icon={<Download className="h-5 w-5" />}
              >
                Download for iOS
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="shadow-lg !rounded-full"
                icon={<Download className="h-5 w-5" />}
              >
                Download for Android
              </Button>
            </div>
          </motion.div>
          
          {/* App screenshot */}
          {/*}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16"
          >
            <div className="bg-dark-900 rounded-xl overflow-hidden shadow-2xl max-w-md mx-auto">
              <img 
                src="https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Mindset App" 
                className="w-full rounded-t-xl"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-white mb-2">Daily Meditation</h3>
                <p className="text-gray-400">
                  Start your day with a 10-minute guided meditation to center your mind and prepare for the day ahead.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-xs font-medium rounded-full bg-primary-500 px-2 py-1 text-white">
                      10:00
                    </div>
                    <span className="ml-2 text-gray-400 text-sm">minutes</span>
                  </div>
                  <button className="rounded-full bg-primary-500 p-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};