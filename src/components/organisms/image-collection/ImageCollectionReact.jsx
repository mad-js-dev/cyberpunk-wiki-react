import React, { useState, useCallback } from 'react';
import CollapsibleItem from '../../molecules/collapsible-item/CollapsibleItemReact';
import './ImageCollection.css';

const ImageCollection = ({ images = [], className = '' }) => {
  const [currentOpenIndex, setCurrentOpenIndex] = useState(0);

  const handleToggle = useCallback((index) => {
    setCurrentOpenIndex(prevIndex => prevIndex === index ? -1 : index);
  }, []);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`image-collection ${className}`}>
      <ul className="image-collection__list">
        {images.map((image, index) => (
          <CollapsibleItem
            key={index}
            isOpen={currentOpenIndex === index}
            onToggle={() => handleToggle(index)}
            title={image.title}
            className="image-collection__item"
          >
            <div className="image-collection__content">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="image-collection__image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              {image.description && (
                <p className="image-collection__description">{image.description}</p>
              )}
            </div>
          </CollapsibleItem>
        ))}
      </ul>
    </div>
  );
};

export default ImageCollection;
