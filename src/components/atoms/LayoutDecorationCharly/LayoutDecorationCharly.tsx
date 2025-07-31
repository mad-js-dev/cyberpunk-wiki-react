import React from 'react';
import './LayoutDecorationCharly.css';

export interface LayoutDecorationCharlyProps {
  text?: string;
  className?: string;
}

const LayoutDecorationCharly: React.FC<LayoutDecorationCharlyProps> = ({
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices, lorem vitae mollis malesuada, tortor arcu vulputate sapien, in finibus metus purus sed lacus. Sed tincidunt convallis consequat. Ut vulputate tincidunt sagittis. Quisque ut vehicula nisi, sit amet tincidunt ante. Nullam ultricies efficitur elementum. Fusce eget accumsan massa, dignissim pharetra orci.",
  className= ''
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
