import React from "react";
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp, Youtube, Twitter } from 'lucide-react';
import ShaderBackground from "./shader-background";

interface FooterProps {
  hue?: number;
}

export const Footer: React.FC<FooterProps> = ({ hue = 220 }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="relative py-12 px-4 min-h-[24rem] overflow-hidden border-t border-white/10"
      style={{
        '--footer-hue': hue,
        '--footer-wave-primary': `hsl(${hue}, 70%, 60%)`,
        '--footer-wave-secondary': `hsl(${hue + 30}, 65%, 55%)`,
        '--footer-wave-accent': `hsl(${hue - 30}, 75%, 65%)`,
        '--footer-wave-glow': `hsl(${hue}, 80%, 50%)`,
        // Static colors for text elements
        '--footer-primary': `hsl(220, 70%, 60%)`,
        '--footer-secondary': `hsl(250, 65%, 55%)`,
        '--footer-accent': `hsl(190, 75%, 65%)`,
        '--footer-glow': `hsl(220, 80%, 50%)`,
      } as React.CSSProperties}
    >
      {/* Dynamic animated background with color-changing elements */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `radial-gradient(circle at 20% 80%, var(--footer-wave-primary) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, var(--footer-wave-secondary) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, var(--footer-wave-accent) 0%, transparent 50%)`,
            animation: 'pulse 4s ease-in-out infinite alternate'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(45deg, transparent 30%, var(--footer-wave-glow) 50%, transparent 70%)`,
            animation: 'slide-gradient 8s linear infinite'
          }}
        />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-60"
            style={{
              backgroundColor: `hsl(${hue + (i * 30)}, 70%, 60%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Keep existing shader background */}
      <ShaderBackground />
      
      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h3 
              className="text-2xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, var(--footer-primary), var(--footer-secondary))`,
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Navaneeth Sai Adapa
            </motion.h3>
            <p className="text-white/70">
              AI Engineer & Creative Technologist crafting the future with intelligent solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h4 
              className="text-lg font-semibold bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, var(--footer-secondary), var(--footer-accent))`,
              }}
              animate={{
                textShadow: [
                  `0 0 10px var(--footer-glow)`,
                  `0 0 20px var(--footer-glow)`,
                  `0 0 10px var(--footer-glow)`
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Quick Links
            </motion.h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Home', href: '#' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Education', href: '#education' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-all duration-300 relative group"
                  style={{
                    textShadow: `0 0 5px var(--footer-glow)`
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h4 
              className="text-lg font-semibold bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, var(--footer-accent), var(--footer-primary))`,
              }}
              animate={{
                filter: [
                  `hue-rotate(0deg) brightness(1)`,
                  `hue-rotate(${hue}deg) brightness(1.2)`,
                  `hue-rotate(0deg) brightness(1)`
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Connect
            </motion.h4>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: 'https://github.com/navaneeth-adapa', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/navaneeth-adapa', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://twitter.com/navaneeth_adapa', label: 'Twitter' },
                { icon: Youtube, href: 'https://youtube.com/@navaneeth-adapa', label: 'YouTube' },
                { icon: Mail, href: 'mailto:navaneeth@adapa.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="backdrop-blur-sm bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group relative"
                  style={{
                    boxShadow: `0 0 15px var(--footer-glow)`,
                    border: `1px solid var(--footer-primary)`,
                  }}
                >
                  <Icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Animated Divider */}
        <motion.div 
          className="h-px mb-8 opacity-40"
          style={{
            background: `linear-gradient(90deg, transparent, var(--footer-primary), var(--footer-secondary), var(--footer-accent), transparent)`,
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white/60 text-sm mb-4 md:mb-0 flex items-center"
          >
            © {currentYear} Navaneeth Adapa. Made with{' '}
            <Heart className="w-4 h-4 text-red-400 mx-1 animate-pulse" />
            and cutting-edge AI
          </motion.p>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            className="backdrop-blur-sm bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 relative"
            style={{
              boxShadow: `0 0 20px var(--footer-glow)`,
              border: `2px solid var(--footer-primary)`,
            }}
            aria-label="Back to top"
          >
            <ArrowUp 
              className="w-4 h-4 transition-all duration-300"
              style={{ color: `var(--footer-primary)` }}
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
