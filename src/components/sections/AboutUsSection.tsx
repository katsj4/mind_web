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
            Our Mission is;<p className="text-primary-500 italic bold color-##008080">Mental wellness that moves with you, everyday-everywhere.</p>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            At Mindset, we believe mental wellness should be a part of everyday life not just a response to crisis. We are here to create a supportive, judgment free space that fits seamlessly into your routine. Whether you're at home, on campus, or on the move, Mindset brings healing, focus, and emotional balance right to your fingertips. Because your mind deserves care every single day, everywhere you go.
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
              Mindset was born not in a boardroom, but in a university hallway where passionate students from Soroti University, Uganda, first came together, united by one concern: Why is mental health overlooked?.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              As students ourselves, we saw it daily. Friends breaking down quietly. Bright minds dimmed by anxiety. Silent battles fought behind smiles. And yet, help always seemed far—too far. Hospitals were intimidating, therapy was expensive or unavailable, and stigma still silenced many. we wanted to bridge this gap using technology so we decided to create something digital, discreet, and deeply personal accessible both online and offline, especially in communities where smartphones are common but therapists aren’t?
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Mindset began to take shape—not just as an app, but as a movement. We wanted a platform where anyone could check in with their emotions, learn how to cope, and even speak to licensed therapists, all in one place. A space where support wasn’t something you only seek in crisis, but a natural part of daily life.
              Initially, our dream was focused on the university—on students who, like us, needed a safe mental space. But the more we grew, the more we realized: Mental health isn't just a campus problem. It’s a people problem.

            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Whether you're a student, a boda rider, a teacher, or a parent—everyone faces stress, pressure, and moments of struggle. That’s why Mindset isn’t just for students anymore. It’s for Uganda. For Africa. For the world. Though we started in Soroti, our dream is far bigger. We are building a future where mental health care is not a privilege—it’s a right. One click, one tap, one small conversation at a time.
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