import React from 'react';
import { motion } from 'framer-motion';
import { Download, Play, Heart } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Tranquil forest"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/80 to-dark-900/60 dark:from-dark-900/90 dark:to-dark-950/80"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated Logo Circle */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.4, 1, 0.4],
              scale: [0.95, 1, 0.95],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="bg-white dark:bg-dark-700 rounded-full p-4 mb-8 shadow-lg"
          >
            <div className="rounded-full bg-primary-500 p-2">
              <Heart className="h-6 w-6 text-white" />
            </div>
          </motion.div>
          
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
              Transform Your <br />
              <span className="text-primary-400">Mindset Today</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover inner peace with our comprehensive wellness app featuring guided meditation, stress-relief audio sessions, and expert motivational content designed for students, entrepreneurs, and wellness seekers everywhere.
            </p>
            
            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button
                variant="primary"
                size="lg"
                icon={<Download className="h-5 w-5" />}
              >
                Download App Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="block py-2 px-4 text-gray-700 dark:text-gray-200 hover:text-[#008080] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-4 after:w-0 after:h-[2px] after:bg-[#008080] hover:after:w-[calc(100%-32px)] after:transition-all after:duration-300"
                onClick={() => window.location.href = "/how-it-works"}
              >
                Learn more
              </Button>
            </div>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-12 mt-16 text-white"
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-400">100K+</p>
              <p className="text-gray-400 mt-1">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-400">500+</p>
              <p className="text-gray-400 mt-1">Meditation Sessions</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-400">98%</p>
              <p className="text-gray-400 mt-1">User Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};