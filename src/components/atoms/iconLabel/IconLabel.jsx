import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconLabel.module.css';

/**
 * IconLabel Component
 * A simple component that displays an icon next to a label
 * @param {Object} props - Component props
 * @param {string} [props.icon=''] - URL or path to the icon image
 * @param {string} [props.label=''] - Text label to display
 * @param {boolean} [props.reverse=false] - Whether to reverse the order of icon and label
 * @param {string} [props.className=''] - Additional CSS class names
 * @param {Object} [props.style] - Inline styles to apply to the container
 * @returns {JSX.Element} Rendered IconLabel component
 */
const IconLabel = ({
  icon = '',
  label = '',
  reverse = false,
  className = '',
  style = {},
  ...props
}) => {
  const containerClasses = [
    styles.iconLabel,
    reverse ? styles.reverse : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <span 
      className={containerClasses}
      style={style}
      {...props}
    >
      {icon && (
        <img 
          src={icon} 
          className={styles.icon} 
          alt="" // Decorative image
        />
      )}
      {label && (
        <span className={styles.label}>
          {label}
        </span>
      )}
    </span>
  );
};

IconLabel.propTypes = {
  /** URL or path to the icon image */
  icon: PropTypes.string,
  /** Text label to display */
  label: PropTypes.string,
  /** Whether to reverse the order of icon and label */
  reverse: PropTypes.bool,
  /** Additional CSS class names */
  className: PropTypes.string,
  /** Inline styles to apply to the container */
  style: PropTypes.object,
};

export default IconLabel;
