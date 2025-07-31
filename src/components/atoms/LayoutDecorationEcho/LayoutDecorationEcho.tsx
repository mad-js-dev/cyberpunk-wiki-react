import React, { useState, useEffect } from 'react';
import './LayoutDecorationEcho.css';

export interface LayoutDecorationProps {
  text?: string;
  className?: string;
}

// Generate a random 4-digit binary number as a string
const generateBinaryNumber = () => {
  return Array(4).fill(0).map(() => Math.round(Math.random())).join('');
};

const LayoutDecorationEcho: React.FC<LayoutDecorationProps> = ({
  className = ''
}) => {
  // State to track which group to update (even or odd indices)
  const [updateEven, setUpdateEven] = useState(true);
  // State to store the binary numbers
  const [binaryNumbers, setBinaryNumbers] = useState<string[]>(Array(8).fill('0000'));

  useEffect(() => {
    const interval = setInterval(() => {
      setBinaryNumbers(prevNumbers => {
        // Create a new array to avoid mutation
        const newNumbers = [...prevNumbers];
        // Update either even or odd indices
        for (let i = 0; i < newNumbers.length; i++) {
          if (updateEven ? i % 2 === 0 : i % 2 !== 0) {
            newNumbers[i] = generateBinaryNumber();
          }
        }
        return newNumbers;
      });
      // Toggle between even and odd updates
      setUpdateEven(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, [updateEven]);

  return (
    <div className={`layoutDecorationEcho ${className}`}>
      <div>-</div>
      {binaryNumbers.map((number, index) => (
        <React.Fragment key={index}>
          {index === 4 && <div className="repeating-element">-</div>}
          <div>{number}</div>
        </React.Fragment>
      ))}
      <div>-</div>
    </div>
  );
};

export default LayoutDecorationEcho;
