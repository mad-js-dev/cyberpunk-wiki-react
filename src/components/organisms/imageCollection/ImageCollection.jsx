import React, { useState, useCallback, useEffect, useRef } from 'react';
import CollapsibleItem from '../../molecules/collapsibleItem/CollapsibleItem';
import './ImageCollection.css';

const ImageCollection = ({ images = [], className = '' }) => {
  const [currentOpenIndex, setCurrentOpenIndex] = useState(-1);
  const firstImageRef = useRef(null);
  const hasLoaded = useRef(false);

  useEffect(() => {
    // Only set to 0 on initial load if we haven't loaded before
      setCurrentOpenIndex(0);

  }, [images]);

  const handleFirstImageLoad = useCallback(() => {
    setCurrentOpenIndex(0);
  }, []);

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
            ref={index === 0 ? firstImageRef : null}
          >
            {index === 0 && (
              <img 
                src={image.src} 
                alt={image.alt} 
                onLoad={handleFirstImageLoad}
                style={{ display: 'none' }} // Hidden but will still trigger onLoad
              />
            )}
            <div className="image-collection__content">
              <div className="image-collection__image-wrapper">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="image-collection__image"
                  onError={(e) => {
                    console.error('Error loading image:', {
                      src: image.src,
                      alt: image.alt,
                      title: image.title,
                      error: e
                    });
                    e.target.style.display = 'none';
                  }}
                  onLoad={() => console.log('Image loaded successfully:', image.src)}
                />
                
              </div>
              
            </div>
          </CollapsibleItem>
        ))}
      </ul>
    </div>
  );
};

export default ImageCollection;
