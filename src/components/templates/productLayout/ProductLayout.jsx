import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ImageCollection from '../../organisms/imageCollection/ImageCollection';
import './ProductLayout.css';

const ProductLayout = ({
  title = '',
  description = '',
  images = [],
  specs = {},
  children,
  className = '',
  ...props
}) => {
  const [currentImages, setCurrentImages] = useState([]);
  const prevImagesRef = useRef(images);

  // Handle images prop changes
  useEffect(() => {
    
    // Parse images if they're a string
    let parsedImages = [];
    if (typeof images === 'string') {
      try {
        parsedImages = JSON.parse(images);
      } catch (e) {
        console.error('Failed to parse images JSON:', e);
      }
    } else if (Array.isArray(images)) {
      parsedImages = [...images];
    }
    // Format images to ensure they have required fields
    const formattedImages = parsedImages.map(img => {
      if (!img) return null;
      
      return {
        src: img.src,
        title: img?.title || '',
        alt: img?.alt || img?.title || 'Product image',
        description: img?.description || ''
      };
    }).filter(Boolean); // Remove any null entries

    setCurrentImages(formattedImages);
    prevImagesRef.current = images;
  }, [images]); // Add images to dependency array

  return (
    <div className={`product-layout ${className}`} {...props}>
      <div className="product-layout__content">
        {title && <h2 className="product-layout__title">{title}</h2>}
        {description && <p className="product-layout__description">{description}</p>}
        {specs && <div className="product-layout__specs">
          {Object.entries(specs).map(([key, value]) => (
            <div key={key} className="product-layout__spec">
              <strong>{key}:</strong> {value}
            </div>
          ))}
        </div>}
      </div>
      <div className="product-layout__image-collection">
        <ImageCollection images={currentImages} />
      </div>
    </div>
  );
};

ProductLayout.propTypes = {
  /** The title of the product */
  title: PropTypes.string,
  /** Array of image objects or JSON string */
  images: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string,
      alt: PropTypes.string,
      description: PropTypes.string
    })),
    PropTypes.string
  ]),
  /** Additional class name for the container */
  className: PropTypes.string,
  /** Child elements */
  children: PropTypes.node
};

export default ProductLayout;