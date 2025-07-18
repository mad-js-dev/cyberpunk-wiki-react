import { createSlice, createSelector } from '@reduxjs/toolkit';
import vehiclesData from '../data/vehicles';

// Define the initial state
const initialState = {
  vehicles: vehiclesData,
  status: 'idle',
  selectedId: null
};

// Create the slice
export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setSelectedId: (state, action) => {
      console.group('Redux: setSelectedId');
      console.log('Current selectedId:', state.selectedId);
      console.log('New selectedId:', action.payload);
      
      // Always update to ensure consistency with the action
      state.selectedId = action.payload;
      console.log('Updated selectedId in state');
      
      console.log('New state:', {
        ...state,
        // Don't log the entire vehicles array
        vehicles: state.vehicles ? `[${state.vehicles.length} vehicles]` : 'none'
      });
      console.groupEnd();
    }
  }
});

// Export actions
export const { setSelectedId } = vehiclesSlice.actions;

// Selectors
export const selectAllVehicles = (state) => state.vehicles.vehicles || [];
export const selectSelectedId = (state) => state.vehicles.selectedId;

export const getSelectedVehicle = createSelector(
  [selectAllVehicles, selectSelectedId],
  (vehicles, selectedId) => {
    console.group('getSelectedVehicle Selector');
    console.log('Input vehicles count:', vehicles.length);
    console.log('Selected ID:', selectedId);
    
    if (!selectedId) {
      console.log('No selected ID, returning null');
      console.groupEnd();
      return null;
    }
    
    // Find the vehicle with the matching ID
    const foundVehicle = vehicles.find(vehicle => {
      const match = vehicle.id === selectedId;
      console.log(`Checking vehicle ${vehicle.id} (${vehicle.manufacturer} ${vehicle.model}): ${match ? 'MATCH' : 'no match'}`);
      return match;
    });
    
    if (!foundVehicle) {
      console.error(`No vehicle found with ID: ${selectedId}`);
      console.log('Available vehicle IDs:', vehicles.map(v => ({
        id: v.id,
        name: `${v.manufacturer || ''} ${v.model || ''} ${v.series || ''}`.trim()
      })));
    } else {
      console.log('Found vehicle:', {
        id: foundVehicle.id,
        name: `${foundVehicle.manufacturer || ''} ${foundVehicle.model || ''} ${foundVehicle.series || ''}`.trim(),
        hasImages: !!(foundVehicle.images && foundVehicle.images.length)
      });
    }
    
    console.groupEnd();
    return foundVehicle || null;
  }
);

// Selector to get vehicle categories in a structure for SelectionMenu (Brand -> Model -> Series)
export const getVehicleCategories = createSelector(
  [selectAllVehicles],
  (vehicles) => {
    if (!vehicles || !vehicles.length) return [];
    
    // First, organize vehicles by manufacturer
    const vehiclesByManufacturer = vehicles.reduce((brands, vehicle) => {
      if (!vehicle.manufacturer) return brands;
      
      // Initialize manufacturer if it doesn't exist
      if (!brands[vehicle.manufacturer]) {
        brands[vehicle.manufacturer] = {};
      }
      
      // Initialize model under manufacturer if it doesn't exist
      if (!brands[vehicle.manufacturer][vehicle.model]) {
        brands[vehicle.manufacturer][vehicle.model] = [];
      }
      
      // Add vehicle to its model and series
      brands[vehicle.manufacturer][vehicle.model].push({
        id: vehicle.id,
        name: vehicle.series || 'Standard',
        data: vehicle // Include full vehicle data for reference
      });
      
      return brands;
    }, {});
    
    // Convert to array format expected by SelectionMenu
    const result = Object.entries(vehiclesByManufacturer).map(([manufacturer, models]) => ({
      label: manufacturer,
      children: Object.entries(models).map(([model, series]) => ({
        label: model,
        children: series.map(item => ({
          id: item.id,
          label: item.name,
          data: item.data 
        }))
      }))
    }));
    console.log(result);
    return result;
  }
);

export default vehiclesSlice.reducer;
