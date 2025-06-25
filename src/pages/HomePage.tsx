import React, { useEffect } from 'react';

import { HeroSection } from '../components/sections/HeroSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { StatsSection } from '../components/sections/StatsSection';
import { CTASection } from '../components/sections/CTASection';
import { AboutUsSection } from '../components/sections/AboutUsSection';
import FAQ from '../components/sections/FAQSection';

export const HomePage: React.FC = () => {

 useEffect(() => {
       window.scrollTo(0, 0); // scroll to top when page loads
     }, []);

  return (
    <div>
      <div id="hero">
        <HeroSection />
      </div>
      <FeaturesSection />
      <StatsSection />
      <AboutUsSection />
      <FAQ />
      <CTASection />
    </div>
  );
};
