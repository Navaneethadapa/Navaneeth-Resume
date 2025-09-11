import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RainbowButton } from './rainbow-borders-button';

export const AnimatedHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'Home', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-xl font-bold text-white cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => window.location.reload()}
          >
            Navaneeth Sai Adapa
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (item === 'Home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                }}
                className="text-white/80 hover:text-white transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* Resume Button */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="hidden md:block"
          >
            <a href="https://drive.google.com/file/d/1rkhLXqiK26nyXfOmHRcYpnCzsm1Ope5K/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <RainbowButton className="w-[120px]">Resume</RainbowButton>
            </a>
            
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                  className="block text-white/80 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item === 'Home') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4">
                <RainbowButton className="w-full">Resume</RainbowButton>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};