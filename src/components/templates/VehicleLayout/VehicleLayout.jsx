import React from 'react';
import PropTypes from 'prop-types';

/**
 * Layout component for displaying vehicle details
 * 
 * @param {Object} props - Component props
 * @param {Object} props.vehicle - The vehicle data to display
 * @param {Function} [props.onVehicleSelected] - Callback when a vehicle is selected
 * @param {React.ReactNode} [props.children] - Optional children to render in the layout
 */
const VehicleLayout = ({ vehicle, onVehicleSelected, children }) => {
  if (!vehicle) {
    return (
      <div className="vehicle-layout">
        <div className="no-selection">
          <h2>Select a vehicle to view details</h2>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="vehicle-layout">
      <div className="vehicle-details">
        <div className="vehicle-header">
          <h2>{vehicle.manufacturer} {vehicle.model} {vehicle.series}</h2>
        </div>
        
        <div className="vehicle-specs">
          <div className="specs-grid">
            <div className="spec-item">
              <span className="spec-label">Top Speed</span>
              <span className="spec-value">{vehicle.topSpeed} mph</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Seats</span>
              <span className="spec-value">{vehicle.seats}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Price</span>
              <span className="spec-value">${vehicle.price ? vehicle.price.toLocaleString() : 'N/A'}</span>
            </div>
            {/* Add more specs as needed */}
          </div>
        </div>
        
        {vehicle.description && (
          <div className="vehicle-description">
            <p>{vehicle.description}</p>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

VehicleLayout.propTypes = {
  vehicle: PropTypes.object,
  onVehicleSelected: PropTypes.func,
  children: PropTypes.node
};

export default VehicleLayout;
