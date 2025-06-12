import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  color, 
  image 
}) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white dark:bg-dark-800 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <div className={`rounded-full ${color} p-3 text-white`}>
            {icon}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 flex-grow">{description}</p>
      </div>
    </div>
  );
};