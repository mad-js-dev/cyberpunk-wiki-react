import React, { useState, useEffect } from 'react';
import './LayoutDecorationBeta.css';

export interface LayoutDecorationBetaProps {
  className?: string;
}

const generateRandomString = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const adjustedLength = length + Math.floor(Math.random() * 3) - 1; // ±1 variation
  let result = '';
  for (let i = 0; i < adjustedLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
};

const baseLengths = [10, 15, 20]; // Base lengths for the strings

const LayoutDecorationBeta: React.FC<LayoutDecorationBetaProps> = ({
  className = ''
}) => {
  const [strings, setStrings] = useState<string[]>(() => 
    baseLengths.map(length => generateRandomString(length))
  );

  const regenerateString = (index: number) => {
    setStrings(prevStrings => {
      const newStrings = [...prevStrings];
      newStrings[index] = generateRandomString(baseLengths[index]);
      return newStrings;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * baseLengths.length);
      regenerateString(randomIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`layoutDecorationBeta ${className}`}>
      {strings.map((str, index) => (
        <span 
          key={index} 
          className="random-string"
          onClick={() => regenerateString(index)}
        >
          {str}
        </span>
      ))}
    </div>
  );
};

export default LayoutDecorationBeta;
