import React from 'react';
import { motion } from 'framer-motion';
import { Download, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden">
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
                onClick={() => window.open('https://play.google.com/apps/internaltest/4701471527189415687', '_blank')}
              >
                Download App Now
              </Button>
              <Link to="/how-it-works">
         <Button
  variant="outline"
  size="lg"
  className="
    bg-[#008080] 
    text-gray-300 
    border-[#008080] 
    rounded-full 
    hover:bg-transparent 
    hover:text-gray-100  
    transition-all 
    duration-300
    py-2 px-4
    "
>
  Learn more
</Button>
                </Link>
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