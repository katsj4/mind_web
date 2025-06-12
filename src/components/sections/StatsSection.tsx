import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Star, Download } from 'lucide-react';

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  delay: number;
}

const Stat: React.FC<StatProps> = ({ value, label, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center p-6 text-center"
    >
      <div className="rounded-full bg-primary-100 dark:bg-primary-900/20 p-4 mb-4 text-primary-500">
        {icon}
      </div>
      <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">{value}</h3>
      <p className="text-gray-600 dark:text-gray-400">{label}</p>
    </motion.div>
  );
};

export const StatsSection: React.FC = () => {
  const stats = [
    { value: '100,000+', label: 'Active Users', icon: <Users className="h-8 w-8" />, delay: 0 },
    { value: '5,000+', label: 'Meditation Hours', icon: <Clock className="h-8 w-8" />, delay: 0.1 },
    { value: '4.8/5', label: 'Average Rating', icon: <Star className="h-8 w-8" />, delay: 0.2 },
    { value: '50,000+', label: 'App Downloads', icon: <Download className="h-8 w-8" />, delay: 0.3 },
  ];

  return (
    <section className="py-16 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Making a <span className="text-primary-500">Real Difference</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Join thousands of users who have transformed their mental wellness journey with Mindset
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Stat 
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};