import React from 'react';
import './LayoutDecorationCharly.css';

export interface LayoutDecorationCharlyProps {
  text?: string;
  className?: string;
}

const LayoutDecorationCharly: React.FC<LayoutDecorationCharlyProps> = ({
  className = ''
}) => {
  return (
    <div className={`layoutDecorationCharly ${className}`}>
      <span>⮝</span>
      <span className="string">{Math.floor(Math.random() * 900) + 100}</span>
      <span>⮟</span>
    </div>
  );
};

export default LayoutDecorationCharly;
