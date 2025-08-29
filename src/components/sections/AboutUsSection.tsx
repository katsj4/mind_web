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
              As students ourselves, we saw it daily. Friends breaking down quietly. Bright minds dimmed by anxiety. Silent battles fought behind smiles. And yet, help always seemed far too far. Hospitals were intimidating, therapy was expensive or unavailable, and stigma still silenced many. we wanted to bridge this gap using technology so we decided to create something digital, discreet, and deeply personal accessible both online and offline, especially in communities where smartphones are common but therapists aren’t?
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Mindset began to take shape—not just as an app, but as a movement. We wanted a platform where anyone could check in with their emotions, learn how to cope, and even speak to licensed therapists, all in one place. A space where support wasn’t something you only seek in crisis, but a natural part of daily life.
              Initially, our dream was focused on the university on students who, like us, needed a safe mental space. But the more we grew, the more we realized: Mental health isn't just a campus problem. It’s a people problem.

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

       {/* Donations / Support Us Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="mt-20 bg-[#008080] rounded-lg p-8 text-center text-white"
>
  <h3 className="text-2xl md:text-3xl font-bold mb-6">
    Support Our Mission
  </h3>
  <p className="text-lg mb-8 max-w-2xl mx-auto">
    If you enjoy what we do, consider supporting us on Ko-fi! Every little bit helps us continue our work and means the world to us!
  </p>
  <motion.a
    href="https://ko-fi.com/mindsetapp"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 hover:bg-[#90ECECFF] rounded-full font-bold text-gray-900 shadow-lg transition-colors duration-300"
  >
    <svg className="w-6 h-6 mr-2" fill="[#008080]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.943-.669-1.864-.669-1.864s-.01-3.954.206-6.798h14.345c.213 2.03 1.446 6.138 1.446 6.138.368 1.454.098 2.008-.423 3.466z"/>
    </svg>
    Support Us on Ko-fi
  </motion.a>
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