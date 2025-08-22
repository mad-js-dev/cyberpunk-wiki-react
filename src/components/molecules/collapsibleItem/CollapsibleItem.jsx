import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CollapsibleItem.css';

const CollapsibleItem = ({
  children,
  isOpen = false,
  onToggle,
  title = '',
  icon,
  removeShift = false,
  hideIcon = false,
  className = '',
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = React.useRef(null);

  useEffect(() => {
    setIsExpanded(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, children]);

  const handleToggle = (e) => {
    e.stopPropagation();
    const newState = !isExpanded;
    setIsExpanded(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <li 
      className={`collapsible-item ${isExpanded ? 'collapsible-item--expanded' : ''} ${removeShift ? 'collapsible-item--no-padding' : ''} ${className}`}
      role="listitem"
      {...props}
    >
      <div 
        className="collapsible-item__header" 
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle(e);
          }
        }}
      >
        {!hideIcon && (
          <span className="collapsible-item__icon">
            {icon || <span className="collapsible-item__arrow">›</span>}
          </span>
        )}
        <span className="collapsible-item__title">{title}</span>
      </div>
      <div 
        ref={contentRef}
        className="collapsible-item__content"
        style={{
          maxHeight: `${contentHeight}px`,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-in-out'
        }}
      >
        <div className="collapsible-item__content-inner">
          {children}
        </div>
      </div>
    </li>
  );
};

CollapsibleItem.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  title: PropTypes.string,
  icon: PropTypes.node,
  removeShift: PropTypes.bool,
  hideIcon: PropTypes.bool,
  className: PropTypes.string,
};

export default CollapsibleItem;
