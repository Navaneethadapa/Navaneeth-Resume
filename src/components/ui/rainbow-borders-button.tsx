import React from 'react';
import { motion } from 'framer-motion';

interface RainbowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const RainbowButton: React.FC<RainbowButtonProps> = ({ 
  children, 
  onClick,
  className = "w-[140px]"
}) => {
  return (
    <>
      <style>{`
        .glow-button {
          position: relative;
          overflow: hidden;
        }
        
        .glow-button::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 14px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6);
          background-size: 300% 300%;
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s ease;
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        .glow-button::after {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 16px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6);
          background-size: 300% 300%;
          opacity: 0;
          z-index: -2;
          filter: blur(8px);
          transition: opacity 0.3s ease;
          animation: glow-pulse 3s ease-in-out infinite reverse;
        }
        
        .glow-button:hover::before {
          opacity: 0.8;
        }
        
        .glow-button:hover::after {
          opacity: 0.4;
        }
        
        .inner-glow {
          position: absolute;
          inset: 0;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .glow-button:hover .inner-glow {
          opacity: 1;
        }
        
        .shine-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }
        
        .glow-button:hover .shine-effect {
          left: 100%;
        }
        
        @keyframes glow-pulse {
          0%, 100% { 
            background-position: 0% 50%;
          }
          50% { 
            background-position: 100% 50%;
          }
        }
        .button-content {
          background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(20,20,40,0.9));
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .rainbow-border:hover .button-content {
          background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(30,30,60,0.8));
          transform: translateY(-1px);
        }
        .rainbow-border:active .button-content {
          transform: translateY(0px);
        }
      `}</style>
      <motion.button 
        onClick={onClick}
        className={`glow-button relative ${className} h-12 flex items-center justify-center gap-2.5 px-6 cursor-pointer font-semibold text-white border border-white/20 rounded-xl overflow-hidden group`}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { duration: 0.1, ease: "easeInOut" }
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Inner Glow */}
        <div className="inner-glow"></div>
        
        {/* Shine Effect */}
        <div className="shine-effect"></div>
        
        <motion.span 
          className="relative z-10 flex items-center gap-2"
          whileHover={{
            textShadow: "0 0 10px rgba(59, 130, 246, 0.6)",
            transition: { duration: 0.3 }
          }}
        >
          {children}
        </motion.span>
      </motion.button>
    </>
  );
};