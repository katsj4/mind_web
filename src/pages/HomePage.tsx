import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../components/sections/HeroSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { StatsSection } from '../components/sections/StatsSection';
import { CTASection } from '../components/sections/CTASection';
import { AboutUsSection } from '../components/sections/AboutUsSection';
import FAQ from '../components/sections/FAQSection';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#hero') {
      const scrollToHero = () => {
        const el = document.getElementById('hero');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };

      // Scroll after slight delay to ensure DOM is rendered
      setTimeout(scrollToHero, 100);
    }
  }, [location]);

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
