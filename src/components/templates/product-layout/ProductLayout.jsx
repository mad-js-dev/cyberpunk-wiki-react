import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageCollection from '../../organisms/image-collection/ImageCollectionReact';
import natureImage from '../../../assets/vehicles/nature.jpg';
import architectureImage from '../../../assets/vehicles/architecture.jpg';
import technologyImage from '../../../assets/vehicles/technology.jpg';
import './ProductLayout.css';

// Default images for the product layout
const defaultImages = [
  {
    title: "Nature",
    src: natureImage,
    alt: "Scenic nature landscape",
    description: "A beautiful landscape showcasing nature's beauty."
  },
  {
    title: "Architecture",
    src: architectureImage,
    alt: "Modern architecture building",
    description: "Stunning modern architecture design."
  },
  {
    title: "Technology",
    src: technologyImage,
    alt: "Technology circuit board",
    description: "Close-up of an advanced circuit board."
  }
];

const ProductLayout = ({
  title = "Product Name",
  images: propImages = [],
  className = '',
  children
}) => {
  const [images, setImages] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(title);

  // Process images when component mounts or propImages changes
  useEffect(() => {
    const processImages = () => {
      try {
        // If propImages is a string, try to parse it as JSON
        let processedImages = [];
        
        if (typeof propImages === 'string') {
          if (!propImages.trim()) {
            setImages(defaultImages);
            return;
          }
          
          try {
            const parsed = JSON.parse(propImages);
            processedImages = Array.isArray(parsed) ? parsed : [];
          } catch (e) {
            console.error('Failed to parse images JSON:', e);
            processedImages = defaultImages;
          }
        } else if (Array.isArray(propImages)) {
          // If it's already an array, use it directly
          processedImages = propImages.length > 0 ? propImages : defaultImages;
        } else {
          // For any other case, use default images
          processedImages = defaultImages;
        }

        // Ensure all images have required fields
        const validatedImages = processedImages.map(img => ({
          src: img?.src || '',
          title: img?.title || 'Untitled',
          alt: img?.alt || '',
          description: img?.description || ''
        })).filter(img => img.src); // Filter out images without a source

        setImages(validatedImages.length > 0 ? validatedImages : defaultImages);
      } catch (error) {
        console.error('Error processing images:', error);
        setImages(defaultImages);
      }
    };

    processImages();
  }, [propImages]);

  // Update title when prop changes
  useEffect(() => {
    setCurrentTitle(title || "Product Name");
  }, [title]);

  return (
    <div className={`product-layout ${className}`}>
      <div className="product-layout__content">
      <div className="product-layout__header">
        <h1 className="product-layout__title">{currentTitle}</h1>
      </div>
      
        {children}
        
      </div>
      <div className="product-layout__image-collection">
        {images && images.length > 0 && (
          <ImageCollection images={images} />
        )}
      </div>

    </div>
  );
};

ProductLayout.propTypes = {
  /**
   * The title of the product
   */
  title: PropTypes.string,
  
  /**
   * Array of image objects or JSON string representing the images
   * Each image should have: src, title, alt, and description
   */
  images: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string,
      alt: PropTypes.string,
      description: PropTypes.string
    })),
    PropTypes.string
  ]),
  
  /**
   * Additional CSS class names
   */
  className: PropTypes.string,
  
  /**
   * Child components
   */
  children: PropTypes.node
};

export default ProductLayout;
