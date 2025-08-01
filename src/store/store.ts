import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { Vehicle, Cyberhack, Weapon } from '../types/appState';

// Define the root state type
export interface RootState {
  vehicles: Vehicle[];
  cyberhacks: Cyberhack[];
  weapons: Weapon[];
}

type SliceAction = {
  type: string;
  payload: unknown;
};

// Create a root reducer with proper typing
const rootReducer = combineReducers({
  vehicles: (state: Vehicle[] = [], action: SliceAction) => {
    if (action.type.endsWith('vehicles/setVehicles')) {
      return action.payload as Vehicle[];
    }
    return state ?? [];
  },
  cyberhacks: (state: Cyberhack[] = [], action: SliceAction) => {
    if (action.type.endsWith('cyberhacks/setCyberhacks')) {
      return action.payload as Cyberhack[];
    }
    return state ?? [];
  },
  weapons: (state: Weapon[] = [], action: SliceAction) => {
    if (action.type.endsWith('weapons/setWeapons')) {
      return action.payload as Weapon[];
    }
    return state ?? [];
  },
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

// Log the initial state
console.log('Initial state:', store.getState());

// Log state changes
store.subscribe(() => {
  console.log('State changed:', store.getState());
});

export type AppDispatch = typeof store.dispatch;
