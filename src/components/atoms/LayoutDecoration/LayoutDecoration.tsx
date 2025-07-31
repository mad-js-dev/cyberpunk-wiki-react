import React from 'react';
import './LayoutDecoration.css';

export interface LayoutDecorationProps {
  text?: string;
  className?: string;
}

const LayoutDecoration: React.FC<LayoutDecorationProps> = ({
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices, lorem vitae mollis malesuada, tortor arcu vulputate sapien, in finibus metus purus sed lacus. Sed tincidunt convallis consequat. Ut vulputate tincidunt sagittis. Quisque ut vehicula nisi, sit amet tincidunt ante. Nullam ultricies efficitur elementum. Fusce eget accumsan massa, dignissim pharetra orci.",
  className= ''
}) => {
  return (
    <div className={`layoutDecoration ${className}`}>
      {text}
    </div>
  );
};

export default LayoutDecoration;
