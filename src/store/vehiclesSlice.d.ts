import { PayloadAction } from '@reduxjs/toolkit';
import { Vehicle } from '../types/appState';

export const vehiclesReducer: (state: Vehicle[], action: PayloadAction<Vehicle[]>) => Vehicle[];
export const setVehicles: (state: Vehicle[], action: PayloadAction<Vehicle[]>) => void;
