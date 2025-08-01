import { PayloadAction } from '@reduxjs/toolkit';
import { Vehicle, Cyberhack, Weapon } from './appState';

declare module '../store/vehiclesSlice' {
    export const vehiclesReducer: (state: Vehicle[], action: PayloadAction<Vehicle[]>) => Vehicle[];
    export const setVehicles: (state: Vehicle[], action: PayloadAction<Vehicle[]>) => void;
}

declare module '../store/cyberhacksSlice' {
    export const cyberhacksReducer: (state: Cyberhack[], action: PayloadAction<Cyberhack[]>) => Cyberhack[];
    export const setCyberhacks: (state: Cyberhack[], action: PayloadAction<Cyberhack[]>) => void;
}

declare module '../store/weaponsSlice' {
    export const weaponsReducer: (state: Weapon[], action: PayloadAction<Weapon[]>) => Weapon[];
    export const setWeapons: (state: Weapon[], action: PayloadAction<Weapon[]>) => void;
}
