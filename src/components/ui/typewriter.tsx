import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  strings: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  loop?: boolean;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  strings,
  typeSpeed = 100,
  deleteSpeed = 50,
  delaySpeed = 2000,
  loop = true,
  className = ""
}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentString = strings[currentStringIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentString.length) {
          setCurrentText(currentString.substring(0, currentText.length + 1));
        } else {
          // Start deleting after delay
          setTimeout(() => setIsDeleting(true), delaySpeed);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentString.substring(0, currentText.length - 1));
        } else {
          // Move to next string
          setIsDeleting(false);
          setCurrentStringIndex((prev) => 
            loop ? (prev + 1) % strings.length : Math.min(prev + 1, strings.length - 1)
          );
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, deleteSpeed, delaySpeed, loop]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};