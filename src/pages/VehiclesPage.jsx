import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  getVehicleCategories, 
  setSelectedId, 
  getSelectedVehicle 
} from '../store/vehiclesSlice';
import EntitySelectionLayout from '../components/views/EntitySelectionLayout';
import VehicleLayout from '../components/templates/VehicleLayout';

const VehiclesPage = () => {
  const dispatch = useDispatch();
  const selectedVehicle = useSelector(getSelectedVehicle);
  const productLayoutRef = useRef(null);
  
  // Handle when a vehicle is selected
  const handleVehicleSelected = (vehicleId, vehicle) => {
    console.log('Vehicle selected:', vehicleId, vehicle);
    // Additional vehicle-specific logic can go here
  };

  // Update the product-layout web component when selectedVehicle changes
  useEffect(() => {
    const productLayout = productLayoutRef.current;
    if (productLayout && productLayout.setAttribute) {
      if (selectedVehicle) {
        // Update the product-layout web component with the selected vehicle's data
        productLayout.setAttribute('name', `${selectedVehicle.manufacturer} ${selectedVehicle.model}`);
        
        // Set the image if available
        if (selectedVehicle.image) {
          productLayout.setAttribute('image', selectedVehicle.image);
        }
        
        // You can add more attributes as needed
        if (selectedVehicle.description) {
          productLayout.setAttribute('description', selectedVehicle.description);
        }
      } else {
        // Reset attributes when no vehicle is selected
        productLayout.removeAttribute('name');
        productLayout.removeAttribute('image');
        productLayout.removeAttribute('description');
      }
    }
  }, [selectedVehicle]);

  return (
    <div className="vehicles-page">
      <EntitySelectionLayout
        getCategories={getVehicleCategories}
        setSelectedId={setSelectedId}
        getSelectedItem={getSelectedVehicle}
        entityType="vehicles"
        onItemSelected={handleVehicleSelected}
        renderDetails={(vehicle) => (
          <div ref={productLayoutRef}>
            <VehicleLayout vehicle={vehicle} onVehicleSelected={handleVehicleSelected}>
              {!vehicle && (
                <div className="no-selection">
                  <h2>Select a vehicle to view details</h2>
                  <p>Choose a vehicle from the menu to see its details here.</p>
                </div>
              )}
            </VehicleLayout>
          </div>
        )}
      />
    </div>
  );
};

export default VehiclesPage;
