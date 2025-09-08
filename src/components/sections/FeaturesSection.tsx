import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Headphones, Lightbulb, Users, Compass, BarChart3 } from 'lucide-react';
import { FeatureCard } from '../ui/FeatureCard';


export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Guided Meditation',
      description: 'Expert-led meditation sessions for anxiety relief, better focus, and restful sleep. Choose from 5-minute quick sessions to hour-long deep practices.',
      icon: <Heart />,
      color: 'bg-primary-500',
      image: 'https://images.pexels.com/photos/1271620/pexels-photo-1271620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Stress-Relief Audio',
      description: 'Immersive soundscapes including nature sounds, guided relaxation, and ASMR content designed to melt away stress and tension.',
      icon: <Headphones />,
      color: 'bg-secondary-500',
      image: '../../images/stress_relief.jpg'
    },
    {
      title: 'Expert Content',
      description: 'Motivational videos and guidance from certified life coaches, therapists, and psychiatrists tailored to your personal growth journey.',
      icon: <Lightbulb />,
      color: 'bg-accent-500',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Mindset AI Chatbot',
      description: 'Talk anytime with your personal AI support companion. Get instant guidance, mental health tips, and a listening ear—whenever you need it',
      icon: <Users />,
      color: 'bg-green-500',
      image: '../../images/chatbot.png'
    },
    {
      title: 'Personalized Journey',
      description: 'AI-powered recommendations based on your goals, preferences, and progress. Your wellness path, uniquely yours.',
      icon: <Compass />,
      color: 'bg-indigo-500',
      image: 'https://images.pexels.com/photos/17421736/pexels-photo-17421736/free-photo-of-aerial-view-of-a-green-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your wellness journey with detailed insights, streak counters, and milestone celebrations to keep you motivated.',
      icon: <BarChart3 />,
      color: 'bg-amber-500',
      image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-900" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Everything You Need for <span className="text-primary-500">Mental Wellness</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our comprehensive platform offers scientifically-backed resources designed to support your mental health journey, whether you're a student managing stress, an entrepreneur building resilience, or anyone seeking inner peace.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={feature.color}
                image={feature.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};