import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  getVehicleCategories, 
  setSelectedId, 
  getSelectedVehicle 
} from '../store/vehiclesSlice';
import EntitySelectionLayout from '../components/views/EntitySelectionLayout';
import ProductLayout from '../components/templates/product-layout/ProductLayout.jsx';

// Add styles
const styles = `  
  .vehicle-specs strong {
    color: #4a90e2;
    margin-right: 8px;
  }
  
  .vehicle-description {
    margin-top: 16px;
    line-height: 1.6;
  }
  
  .no-vehicle-selected {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    color: #666;
    font-style: italic;
  }
`;

const VehiclesPage = () => {
  const dispatch = useDispatch();
  const selectedVehicle = useSelector(getSelectedVehicle);
  
  // Handle when a vehicle is selected
  const handleVehicleSelected = (vehicleId, vehicle) => {
    console.log('Vehicle selected:', vehicleId, vehicle);
    // Additional vehicle-specific logic can go here
  };

  // Prepare vehicle images for ProductLayout
  const getVehicleImages = () => {
    if (!selectedVehicle) return [];
    
    const images = [];
    
    // Add main image if available
    if (selectedVehicle.image) {
      images.push({
        src: selectedVehicle.image,
        title: `${selectedVehicle.manufacturer} ${selectedVehicle.model}`,
        alt: `Image of ${selectedVehicle.manufacturer} ${selectedVehicle.model}`,
        description: selectedVehicle.description || ''
      });
    }
    
    // Add additional images if available
    if (selectedVehicle.images && Array.isArray(selectedVehicle.images)) {
      selectedVehicle.images.forEach((img, index) => {
        if (img && img.src) {
          images.push({
            src: img.src,
            title: img.title || `${selectedVehicle.manufacturer} ${selectedVehicle.model} - View ${index + 1}`,
            alt: img.alt || `Additional view ${index + 1} of ${selectedVehicle.manufacturer} ${selectedVehicle.model}`,
            description: img.description || ''
          });
        }
      });
    }
    
    return images.length > 0 ? images : [];
  };

  return (
    <div className="vehicles-page">
      <EntitySelectionLayout
        getCategories={getVehicleCategories}
        setSelectedId={setSelectedId}
        getSelectedItem={getSelectedVehicle}
        entityType="vehicles"
        onItemSelected={handleVehicleSelected}
      >
        {selectedVehicle ? (
          <div className="vehicle-details">
            <ProductLayout 
              title={`${selectedVehicle.manufacturer} ${selectedVehicle.model}`}
              images={getVehicleImages()}
            >
              <div className="vehicle-specs">
                {selectedVehicle.description && <p className="vehicle-description">{selectedVehicle.description}</p>}
              </div>
            </ProductLayout>
          </div>
        ) : (
          <div className="no-vehicle-selected">
            <p>Select a vehicle to view details</p>
          </div>
        )}
      </EntitySelectionLayout>
    </div>
  );
};

// Add styles to the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default VehiclesPage;
