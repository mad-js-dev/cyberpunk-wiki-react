import { PayloadAction } from '@reduxjs/toolkit';
import { Weapon } from '../types/appState';

export const weaponsReducer: (state: Weapon[], action: PayloadAction<Weapon[]>) => Weapon[];
export const setWeapons: (state: Weapon[], action: PayloadAction<Weapon[]>) => void;
