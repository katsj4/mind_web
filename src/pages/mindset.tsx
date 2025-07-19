// client/src/App.js
import React from 'react';
import {
  Clock,
  BrainCircuit,
  ShieldCheck,
  Sparkles,
  ActivitySquare,
  HeartHandshake,
  Sunrise,
  Brain,
  HeartPulse,
  Feather,
  Lightbulb,
  RefreshCcw,
  LineChart,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-10 flex justify-center items-start">

      <div className="w-full max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10">
        {/* Hero Section */}
        <section className="text-center mb-16 relative">
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-teal-200 rounded-full opacity-20"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal-300 rounded-full opacity-20"></div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-700 to-teal-500 text-transparent bg-clip-text">
            Meet MindsetAI
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700 dark:text-gray-100">
            Your personal AI-powered coach for mental wellness. Get real-time, 24/7 support to manage stress,
            boost confidence, and achieve clarity — all in a safe, judgment-free space.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-teal-700 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:from-teal-800 hover:to-teal-600 transition-all transform hover:-translate-y-1 duration-300">
            Try Mindset AI
          </button>
        </section>

        {/* Features Section */}
        <section className="md:flex md:items-start md:space-x-8 mb-16">
          <div className="md:w-1/2">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                <BrainCircuit className="text-teal-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-teal-700 tracking-tight">
                Why MindsetAI?
              </h2>
            </div>
            
            <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-base md:text-lg dark:text-gray-800">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-teal-50 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <strong className="text-teal-700">{feature.title}:</strong> {feature.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative">
              <img
                src="/images/AI1.jpg"
                alt="Mindset AI Coaching Preview"
                className="w-full h-auto rounded-2xl shadow-xl transform transition duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-2">
                    <ShieldCheck className="text-teal-700" />
                  </div>
                  <span className="font-semibold text-teal-700">100% Secure</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="md:flex md:flex-row-reverse md:items-start md:space-x-8 mb-16">
          <div className="md:w-1/2">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                <Brain className="text-teal-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-teal-700">
                How It Works
              </h2>
            </div>
            
            <div className="space-y-6 text-base md:text-lg text-gray-800 dark:text-gray-800">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-teal-50 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                    {step.icon}
                  </div>
                  <div>
                    <strong className="text-teal-700">{step.title}:</strong> {step.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative">
              <img
                src="/images/AI2.jpg"
                alt="Mindset AI in Action"
                className="w-full h-auto rounded-2xl shadow-xl transform transition duration-500 hover:scale-105"
              />
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-2">
                    <LineChart className="text-teal-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-teal-700">Track Progress</div>
                    <div className="text-sm">Visualize your journey</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-teal-700">
            What Our Users Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <span className="text-teal-700 font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold dark:text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-teal-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-10 bg-gradient-to-r from-teal-700 to-teal-500 rounded-2xl shadow-xl mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Mental Wellness?
          </h2>
          <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of users who have improved their mental health with MindsetAI
          </p>
          <button className="px-8 py-3 bg-white text-teal-700 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 duration-300">
            Get Started Today
          </button>
        </section>
      </div>
    </div>
  );
}

const features = [
  {
    icon: <Clock className="text-teal-700" />,
    title: "24/7 Personalized Support",
    description: "Always available to offer encouragement, tools, and coping strategies whenever you need it — day or night."
  },
  {
    icon: <BrainCircuit className="text-teal-700" />,
    title: "Evidence-Based Techniques",
    description: "Grounded in psychological frameworks like CBT, ACT, and mindfulness for reliable, structured growth."
  },
  {
    icon: <ShieldCheck className="text-teal-700" />,
    title: "Safe & Confidential",
    description: "Your privacy is protected with secure, judgment-free conversations at all times."
  },
  {
    icon: <Sparkles className="text-teal-700" />,
    title: "Adaptive Learning",
    description: "Understands your journey and evolves support that matches your progress and emotional state."
  },
  {
    icon: <ActivitySquare className="text-teal-700" />,
    title: "Mindful Wellness Tracking",
    description: "Monitors your mood, sleep patterns, and emotional triggers to help you stay balanced."
  },
  {
    icon: <HeartHandshake className="text-teal-700" />,
    title: "Motivational Growth Coaching",
    description: "Provides daily affirmations, goal-setting reminders, and thought reframing to build resilience."
  },
  {
    icon: <Sunrise className="text-teal-700" />,
    title: "Holistic Mental Health Companion",
    description: "Promotes emotional wellness, self-compassion, and healthier lifestyle choices."
  }
];

const processSteps = [
  {
    icon: <HeartPulse className="text-teal-700" />,
    title: "Daily Emotional Check-ins",
    description: "MindsetAI begins by gently checking how you're feeling through quick, simple reflections."
  },
  {
    icon: <Feather className="text-teal-700" />,
    title: "Guided Exercises",
    description: "Based on your emotional state, you're offered tailored breathing routines, stress-relief meditations, or positive affirmations."
  },
  {
    icon: <Lightbulb className="text-teal-700" />,
    title: "Reflective Journaling",
    description: "Use thought-provoking prompts to express and reframe thoughts, fostering emotional clarity and resilience."
  },
  {
    icon: <RefreshCcw className="text-teal-700" />,
    title: "Progressive Learning",
    description: "The more you interact, the more MindsetAI adapts, learning what techniques and timing work best for you."
  },
  {
    icon: <LineChart className="text-teal-700" />,
    title: "Mood Pattern Insights",
    description: "Visual feedback helps you spot patterns and growth in your mental health journey over time."
  },
  {
    icon: <ShieldCheck className="text-teal-700" />,
    title: "Safe & Non-judgmental",
    description: "Everything you share remains private, offering a secure space for open reflection and self-discovery."
  }
];

const testimonials = [
  {
    initials: "KF",
    name: "Kato Francis",
    role: "Student at Soroti University",
    quote: "MindsetAI has completely transformed how I manage stress. The daily check-ins and tailored exercises have made a significant difference in my mental health.",
    rating: 5
  },
  {
    initials: "AM",
    name: "Dr.Anne Move",
    role: "Director of Research at Soroti University",
    quote: "As someone who travels frequently, having 24/7 support has been invaluable. The guided meditations help me stay centered no matter where I am.",
    rating: 5
  },
  {
    initials: "BM",
    name: "Prof. Brian Muwanga",
    role: "University Professor",
    quote: "The mood tracking feature has helped me identify patterns I never noticed before. I've been able to make positive changes based on these insights.",
    rating: 4
  }
];

export default App;