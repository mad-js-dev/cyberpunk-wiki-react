import React, { useState, useEffect } from 'react';
import './LayoutDecorationDelta.css';

export interface LayoutDecorationDeltaProps {
  text?: string;
  className?: string;
}

const LayoutDecorationDelta: React.FC<LayoutDecorationDeltaProps> = ({
  className= ''
}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const elements = ['🞅', '◴', '◵', '◶', '◷', '🞅'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => {
        // Calculate next index (skip first and last elements)
        const nextIndex = prev + 1;
        // Reset to 1 (second element) if we've reached the second to last element
        return nextIndex >= elements.length - 1 ? 1 : nextIndex;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [elements.length]);

  return (
    <div className={`layoutDecorationDelta ${className}`}>
      {elements.map((element, index) => (
        <span 
          key={index}
          className={index === activeIndex ? 'active' : ''}
        >
          {element}
        </span>
      ))}
    </div>
  );
};

export default LayoutDecorationDelta;
