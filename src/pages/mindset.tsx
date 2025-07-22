import  { useState, useEffect } from 'react';
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

  Star,
  ShieldHalf,
  BatteryCharging,
  
  UserCheck,

} from "lucide-react";

// Component: Phone Slider
const PhoneSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/AI1.jpg",
    "/images/AI2.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative">
      <div className="bg-gray-900 rounded-[40px] p-4 w-[350px] h-[700px] shadow-2xl">
        {/* Phone notch */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-10"></div>
        
        {/* Screen content */}
        <div className="relative w-full h-full rounded-[32px] overflow-hidden">
          {/* Slides */}
          <div className="relative w-full h-full">
            {slides.map((src, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img
                  src={src}
                  alt={`Mindset AI screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 pt-1 text-white text-xs z-20">
            <span>9:41</span>
            <div className="flex space-x-2">
              <span>📶</span>
              <span>📡</span>
              <span>🔋</span>
            </div>
          </div>
          
          {/* App header */}
          <div className="absolute top-10 left-0 right-0 text-center z-20">
            <h1 className="text-white text-xl font-bold">MindsetAI</h1>
            <p className="text-gray-300 text-sm">Your mental wellness coach</p>
          </div>
          
          {/* Slide indicators */}
          <div className="absolute bottom-24 left-0 right-0 flex justify-center space-x-2 z-20">
            {slides.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
              />
            ))}
          </div>
          
          {/* Download CTA */}
          {/* <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-2">
                <ShieldCheck className="text-teal-700" size={20} />
              </div>
              <span className="font-semibold text-teal-700">100% Secure</span>
            </div>
          </div> */}
        </div>
        
        {/* Home button */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-gray-700"></div>
      </div>
    </div>
  );
};

// Component: Hero Section
const HeroSection = () => (
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
);

// Component: Features Section
const FeaturesSection = () => (
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
      
      <ul className="space-y-6 text-gray-800 dark:text-gray-200 text-base md:text-lg">
        {features.map((feature, index) => (
          <li 
            key={index} 
            className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900 transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center flex-shrink-0 mt-1">
              {feature.icon}
            </div>
            <div>
              <strong className="text-teal-700 dark:text-teal-300">{feature.title}:</strong> {feature.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
    
    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
      <PhoneSlider />
    </div>
  </section>
);

// Component: Action Box
const ActionBox = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
    <div className="text-center mb-6">
      <div className="w-20 h-20 mx-auto mb-4 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
        <Brain className="w-10 h-10 text-teal-700 dark:text-teal-300" />
      </div>
      <h3 className="text-2xl font-bold text-teal-700 dark:text-teal-300">
        MindsetAI in Action
      </h3>
    </div>
    
    <div className="space-y-5">
      <div className="bg-teal-50 dark:bg-gray-700 p-5 rounded-xl">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mr-3">
            <UserCheck className="text-teal-700 dark:text-teal-300 w-4 h-4" />
          </div>
          <h4 className="font-semibold text-teal-700 dark:text-teal-300">Personalized Growth Path</h4>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          MindsetAI creates a custom mental wellness roadmap based on your unique needs and goals
        </p>
      </div>
      
      <div className="bg-teal-50 dark:bg-gray-700 p-5 rounded-xl">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mr-3">
            <BatteryCharging className="text-teal-700 dark:text-teal-300 w-4 h-4" />
          </div>
          <h4 className="font-semibold text-teal-700 dark:text-teal-300">Daily Energy Boost</h4>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          92% of users report increased mental energy and focus after morning sessions
        </p>
      </div>
      
      <div className="bg-teal-50 dark:bg-gray-700 p-5 rounded-xl">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mr-3">
            <ShieldHalf className="text-teal-700 dark:text-teal-300 w-4 h-4" />
          </div>
          <h4 className="font-semibold text-teal-700 dark:text-teal-300">Resilience Building</h4>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Develop lasting emotional resilience with our science-backed techniques
        </p>
      </div>
      
      <div className="mt-6 bg-teal-600 dark:bg-teal-800 rounded-xl p-5 text-white text-center">
        <div className="text-3xl font-bold mb-2">4.9/5</div>
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current text-yellow-300" />
          ))}
        </div>
        <p className="text-sm">Average User Rating</p>
      </div>
    </div>
  </div>
);

// Component: How It Works
const HowItWorksSection = () => (
  <section className="md:flex md:items-start md:space-x-8 mb-16">
    <div className="md:w-1/2 mb-10 md:mb-0">
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mr-4">
          <Brain className="text-teal-700 dark:text-teal-300" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-teal-700 dark:text-teal-300">
          How It Works
        </h2>
      </div>
      
      <div className="space-y-6 text-base md:text-lg text-gray-800 dark:text-gray-200">
        {processSteps.map((step, index) => (
          <div 
            key={index} 
            className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900 transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center flex-shrink-0 mt-1">
              {step.icon}
            </div>
            <div>
              <strong className="text-teal-700 dark:text-teal-300">{step.title}:</strong> {step.description}
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="md:w-1/2">
      <ActionBox />
    </div>
  </section>
);

// Component: Testimonials
const TestimonialsSection = () => (
  <section className="mb-16">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-teal-700 dark:text-teal-300">
      What Our Users Say
    </h2>
    
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index} 
          className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mr-4">
              <span className="text-teal-700 dark:text-teal-300 font-bold">{testimonial.initials}</span>
            </div>
            <div>
              <div className="font-semibold dark:text-gray-100">{testimonial.name}</div>
              <div className="text-sm text-teal-600 dark:text-teal-400">{testimonial.role}</div>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
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
);

// Component: Final CTA
const FinalCTASection = () => (
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
);

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-10 flex justify-center items-start">
      <div className="w-full pt-24 max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FinalCTASection />
      </div>
    </div>
  );
}

// Data Arrays
const features = [
  {
    icon: <Clock className="text-teal-700 dark:text-teal-300" />,
    title: "24/7 Personalized Support",
    description: "Always available to offer encouragement, tools, and coping strategies whenever you need it — day or night."
  },
  {
    icon: <BrainCircuit className="text-teal-700 dark:text-teal-300" />,
    title: "Evidence-Based Techniques",
    description: "Grounded in psychological frameworks like CBT, ACT, and mindfulness for reliable, structured growth."
  },
  {
    icon: <ShieldCheck className="text-teal-700 dark:text-teal-300" />,
    title: "Safe & Confidential",
    description: "Your privacy is protected with secure, judgment-free conversations at all times."
  },
  {
    icon: <Sparkles className="text-teal-700 dark:text-teal-300" />,
    title: "Adaptive Learning",
    description: "Understands your journey and evolves support that matches your progress and emotional state."
  },
  {
    icon: <ActivitySquare className="text-teal-700 dark:text-teal-300" />,
    title: "Mindful Wellness Tracking",
    description: "Monitors your mood, sleep patterns, and emotional triggers to help you stay balanced."
  },
  {
    icon: <HeartHandshake className="text-teal-700 dark:text-teal-300" />,
    title: "Motivational Growth Coaching",
    description: "Provides daily affirmations, goal-setting reminders, and thought reframing to build resilience."
  }
];

const processSteps = [
  {
    icon: <HeartPulse className="text-teal-700 dark:text-teal-300" />,
    title: "Daily Emotional Check-ins",
    description: "MindsetAI begins by gently checking how you're feeling through quick, simple reflections."
  },
  {
    icon: <Feather className="text-teal-700 dark:text-teal-300" />,
    title: "Guided Exercises",
    description: "Based on your emotional state, you're offered tailored breathing routines, stress-relief meditations, or positive affirmations."
  },
  {
    icon: <Lightbulb className="text-teal-700 dark:text-teal-300" />,
    title: "Reflective Journaling",
    description: "Use thought-provoking prompts to express and reframe thoughts, fostering emotional clarity and resilience."
  },
  {
    icon: <RefreshCcw className="text-teal-700 dark:text-teal-300" />,
    title: "Progressive Learning",
    description: "The more you interact, the more MindsetAI adapts, learning what techniques and timing work best for you."
  },
  {
    icon: <LineChart className="text-teal-700 dark:text-teal-300" />,
    title: "Mood Pattern Insights",
    description: "Visual feedback helps you spot patterns and growth in your mental health journey over time."
  },
  {
    icon: <ShieldCheck className="text-teal-700 dark:text-teal-300" />,
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