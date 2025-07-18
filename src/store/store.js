import { configureStore } from '@reduxjs/toolkit';
import { vehiclesSlice } from './vehiclesSlice';

export const store = configureStore({
  reducer: {
    vehicles: vehiclesSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Log the initial state
console.log('Initial state:', store.getState());

// Log state changes
store.subscribe(() => {
  console.log('State changed:', store.getState());
});
