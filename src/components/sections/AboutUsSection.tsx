import React from 'react';
import { motion } from 'framer-motion';
import { Heart, FlaskConical, Users, CheckCircle } from 'lucide-react';

export const AboutUsSection: React.FC = () => {
  const drivesUs = [
    {
      title: 'Compassion First',
      description: 'Every feature is designed with deep empathy for mental health struggles and the journey to wellness.',
      icon: <Heart className="h-6 w-6 text-white" />,
      color: 'bg-teal-500',
    },
    {
      title: 'Science-Backed',
      description: 'Our content is developed in partnership with licensed therapists, neuroscientists, and meditation experts.',
      icon: <FlaskConical className="h-6 w-6 text-white" />,
      color: 'bg-teal-500',
    },
    {
      title: 'Inclusive Community',
      description: 'We believe mental wellness should be accessible to everyone, regardless of background or experience level.',
      icon: <Users className="h-6 w-6 text-white" />,
      color: 'bg-teal-500',
    },
    {
      title: 'Proven Results',
      description: 'Our methods are validated through clinical studies and thousands of user success stories.',
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      color: 'bg-teal-500',
    },
  ];

  const expertTeam = [
    { count: '25+', label: 'Licensed Therapists' },
    { count: '15+', label: 'Meditation Masters' },
    { count: '50+', label: 'Wellness Experts' },
  ];

  return (
    <section className="py-24 bg-white dark:bg-dark-900" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading and Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Mission is <span className="text-primary-500">Your Wellness</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We believe that mental wellness should be as accessible as physical fitness. That’s why we’ve created a comprehensive platform that makes mindfulness, meditation, and mental health resources available to everyone, everywhere.
          </p>
        </motion.div>

        {/* Our Story Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 p-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Our Story
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Founded in 2020 by a team of mental health advocates, technologists, and wellness experts, Mindset was born from a simple observation: while millions of people struggle with stress, anxiety, and mental health challenges, quality resources remain fragmented and inaccessible.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We set out to change that by creating a unified platform that combines the best of ancient wisdom with modern technology. Our team includes licensed therapists, meditation teachers with decades of experience, and developers who understand the nuances of creating meaningful digital experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Today, we’re proud to serve millions of users worldwide, helping them build resilience, find peace, and create lasting positive change in their lives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 p-6"
          >
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team collaborating in a meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* What Drives Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Drives Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {drivesUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className={`rounded-full ${item.color} p-4 inline-flex mb-4`}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Meet Our Expert Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-teal-600 rounded-lg p-8 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-12">
            Meet Our Expert Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertTeam.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-4xl font-bold">{item.count}</p>
                <p className="text-lg">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};