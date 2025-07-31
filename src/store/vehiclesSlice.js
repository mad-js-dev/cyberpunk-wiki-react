import { createSelector } from '@reduxjs/toolkit';
import { createEntitySlice } from './sliceFactory';
import vehiclesData from '../data/vehicles';

// Custom formatter for vehicle data to create a hierarchical structure
const formatVehicleData = (vehicles) => {
  if (!vehicles || !vehicles.length) return [];
  
  // Group vehicles by manufacturer and model
  const vehiclesByManufacturer = vehicles.reduce((brands, vehicle) => {
    if (!vehicle.manufacturer || !vehicle.model) return brands;
    
    if (!brands[vehicle.manufacturer]) {
      brands[vehicle.manufacturer] = {};
    }
    
    if (!brands[vehicle.manufacturer][vehicle.model]) {
      brands[vehicle.manufacturer][vehicle.model] = [];
    }
    
    brands[vehicle.manufacturer][vehicle.model].push({
      id: vehicle.id,
      name: vehicle.series || 'Standard',
      ...vehicle
    });
    
    return brands;
  }, {});
  
  // Convert to the format expected by SelectionMenu
  return Object.entries(vehiclesByManufacturer).map(([manufacturer, models]) => ({
    id: `manufacturer_${manufacturer.toLowerCase().replace(/\s+/g, '_')}`,
    label: manufacturer,
    type: 'manufacturer',
    children: Object.entries(models).map(([model, series]) => ({
      id: `model_${model.toLowerCase().replace(/\s+/g, '_')}`,
      label: model,
      type: 'model',
      children: series.map(vehicle => ({
        id: vehicle.id,
        label: vehicle.series || 'Standard',
        ...vehicle
      }))
    }))
  }));
};

// Create the slice with custom data formatter
const {
  actions: vehiclesActions,
  reducer: vehiclesReducer,
  selectors: vehiclesSelectors
} = createEntitySlice({
  name: 'vehicles',
  initialData: vehiclesData,
  // No grouping as we're handling the structure in the formatter
});

// Export the reducer as default
export default vehiclesReducer;

// Export actions
export const { setSelectedId } = vehiclesActions;

// Export all selectors with semantic names
export const {
  selectAllData: selectAllVehicles,
  selectSelectedId: selectSelectedVehicleId,
  selectStatus: selectVehiclesStatus,
  selectSelectedItem: getSelectedVehicle,
  selectFlatData: selectVehiclesFlatList
} = vehiclesSelectors;

// Custom selector for the hierarchical vehicle data
export const getVehicleCategories = createSelector(
  [selectAllVehicles],
  (vehicles) => formatVehicleData(vehicles)
);
