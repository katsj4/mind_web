import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function HowItWorks() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setExpandedStep(prev => (prev === index ? null : index));
  };

  const steps = [
    {
      step: 1,
      title: 'Download the App',
      description:
        'Get Mindset from the Google Play Store. It’s free, secure, and quick to install on any Android device.',
      details:
        'Search "Mindset" in the Play Store, click install, and open the app after it’s downloaded. You’ll be welcomed with a brief onboarding to set your intent.',
      image: 'https://cdn-icons-png.flaticon.com/512/1828/1828911.png',
    },
    {
      step: 2,
      title: 'Create Your Profile',
      description:
        'Set up a personalized profile including your mental health goals, challenges, and preferences.',
      details:
        'Fill in basic info like age and gender, select focus areas (anxiety, stress, mood), and choose your preferred support methods like journaling or meditation.',
      image: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
    },
    {
      step: 3,
      title: 'Set Your Wellness Goals',
      description:
        'Choose focus areas like stress reduction, mindfulness, emotional balance, or sleep improvement.',
      details:
        'You’ll be guided to set SMART goals tailored to your needs. You can revise them anytime in your settings.',
      image: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
    },
    {
      step: 4,
      title: 'Get AI-Guided Recommendations',
      description:
        'Let our AI assistant generate a custom plan with meditation, exercises, reminders, and tips tailored to you.',
      details:
        'Based on your profile and goals, our AI generates a weekly schedule, daily check-ins, and wellness content to keep you on track.',
      image: 'https://cdn-icons-png.flaticon.com/512/3771/3771486.png',
    },
    {
      step: 5,
      title: 'Track Your Progress',
      description:
        'Monitor your mental health improvements through daily logs, streaks, and achievements.',
      details:
        'Earn badges for streaks, view mood analytics, and export your logs. Get a visual snapshot of your journey any time.',
      image: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
    },
    {
      step: 6,
      title: 'Access Support Anytime',
      description:
        'Get community support, chat with AI counselors, or connect with professional therapists if needed.',
      details:
        'Join peer communities or book therapy sessions directly in-app. All sessions are secure and private.',
      image: 'https://cdn-icons-png.flaticon.com/512/4712/4712014.png',
    },
  ];

  return (
    <section className="pt-28 pb-20 bg-[#ECF3F3E7] dark:bg-[#033838] bg-opacity-90 backdrop-blur-sm">
      <div className="mx-auto w-[90%] max-w-7xl px-4">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#008080] dark:text-[#00cccc] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Mindset guides you through a personalized path toward better mental wellness. From onboarding to daily routines, we make it easy to stay on track. Whether you're here for mindfulness, mood tracking, or expert support — each step is built with your growth in mind.
          </p>
        </header>

        <div className="relative border-l-4 border-[#008080] dark:border-[#00cccc] pl-6 space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <div className="flex items-start space-x-4">
                <img src={step.image} alt={step.title} className="w-14 h-14" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    Step {step.step}: {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {step.description}
                  </p>
                  <button
                    onClick={() => toggleStep(index)}
                    className="flex items-center text-[#008080] dark:text-[#00cccc] font-medium hover:underline focus:outline-none"
                  >
                    {expandedStep === index ? (
                      <>
                        Show Less <ChevronUp className="ml-1 w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Learn More <ChevronDown className="ml-1 w-4 h-4" />
                      </>
                    )}
                  </button>
                  <AnimatePresence>
                    {expandedStep === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-4 text-gray-700 dark:text-gray-300"
                      >
                        <p>{step.details}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Watch How It Works
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a visual overview of Mindset’s features and how to integrate them into your routine — all in just a few minutes.
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/zjRvFpGjVyc"
              title="How Mindset Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
