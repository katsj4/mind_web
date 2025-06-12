import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  category: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Graduate Student",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "PhD Student Success",
    quote: "Mindset completely transformed my approach to stress management during my PhD. The guided meditations helped me maintain focus during my most challenging research periods, and the sleep stories became my nightly ritual.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Tech Entrepreneur",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Startup Founder",
    quote: "As a startup founder, I was burning out fast. Mindset's expert content and daily practices helped me build the resilience I needed. Now I start every day with a 10-minute session and I've never felt more centered.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Working Mother",
    image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Work-Life Balance",
    quote: "Balancing work and family was overwhelming until I found Mindset. The community support and quick 5-minute breathing exercises fit perfectly into my busy schedule. My family has noticed how much calmer and present I am.",
    rating: 5
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-primary-500 mb-4">
        <span className="text-4xl font-serif">"</span>
      </div>
      
      <div className="mb-6">
        <div className="text-primary-500 text-sm font-medium mb-2">
          {testimonial.category}
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {testimonial.quote}
        </p>
        <div className="flex text-primary-500 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
      </div>
      
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white">
            {testimonial.name}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-900" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Real Stories, <span className="text-primary-500">Real Transformations</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover how Mindset has helped thousands of people from all walks of life achieve mental clarity, overcome challenges, and build lasting wellness habits.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};