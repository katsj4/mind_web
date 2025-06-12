import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Download } from 'lucide-react';

import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '', scroll: true },
    { name: 'Features', href: '#features', scroll: true },
    { name: 'About', href: '#about', scroll: true },
   // { name: 'Testimonials', href: '#testimonials', scroll: true },
    { name: 'Mindset AI', href: '#ai', scroll: true },
    { name: 'Download', href: '#download', scroll: true }
  ];
  
  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="rounded-full bg-primary-500 p-2">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-primary-500">Mindset</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.scroll ? (
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors py-2"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                )}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </nav>
          
          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="primary" 
              className="hidden sm:flex"
              icon={<Download className="h-4 w-4 mr-2" />}
            >
              Get App
            </Button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="container mx-auto px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.scroll ? (
                    <button
                      onClick={() => {
                        scrollToSection(link.href.substring(1));
                        setMobileMenuOpen(false);
                      }}
                      className="block w-full text-left py-2 px-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-md"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="block py-2 px-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-3">
                <Button 
                  variant="primary" 
                  className="w-full"
                  icon={<Download className="h-4 w-4 mr-2" />}
                >
                  Get App
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};