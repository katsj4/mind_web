import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { StatsSection } from '../components/sections/StatsSection';
import { CTASection } from '../components/sections/CTASection';
import { AboutUsSection } from '../components/sections/AboutUsSection';
import FAQ from '../components/sections/FAQSection';

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <AboutUsSection />
      <FAQ />
      {/* Uncomment when TestimonialsSection is ready */}
      {/* <TestimonialsSection /> */}
      <CTASection />
    </div>
  );
};