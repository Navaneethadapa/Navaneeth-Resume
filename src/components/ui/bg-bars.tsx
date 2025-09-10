import React from 'react';

interface GradientBarsProps {
  bars?: number;
  colors?: string[];
}

export const GradientBars: React.FC<GradientBarsProps> = ({ 
  bars = 15, 
  colors = ['#00D4FF40', '#9D4EDD20', 'transparent'] 
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="absolute h-full opacity-30"
          style={{
            left: `${(i / bars) * 100}%`,
            width: `${100 / bars}%`,
            background: `linear-gradient(135deg, ${colors[i % colors.length]}, transparent)`,
            transform: `skewX(-15deg) translateX(${Math.sin(i) * 10}px)`,
            animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
};