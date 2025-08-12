import React from 'react';
import PropTypes from 'prop-types';
import './ArrowMenu.css';

const ArrowMenu = ({ className = '' }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 30 26" 
    xmlns="http://www.w3.org/2000/svg"
    className={`arrow-icon ${className}`}
  >
    <path d="M29.5 0.5L16 26H14L0 0.5H4V3H25.5V0.5H29.5Z" />
  </svg>
);

ArrowMenu.propTypes = {
  className: PropTypes.string
};

export default ArrowMenu;
