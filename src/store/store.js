import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './vehiclesSlice';
import cyberhacksReducer from './cyberhacksSlice';
import weaponsReducer from './weaponsSlice';

export const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    cyberhacks: cyberhacksReducer,
    weapons: weaponsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Log the initial state
console.log('Initial state:', store.getState());

// Log state changes
store.subscribe(() => {
  console.log('State changed:', store.getState());
});
