import React from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-dark-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};