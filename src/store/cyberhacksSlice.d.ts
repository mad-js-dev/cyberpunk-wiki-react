import { PayloadAction } from '@reduxjs/toolkit';
import { Cyberhack } from '../types/appState';

export const cyberhacksReducer: (state: Cyberhack[], action: PayloadAction<Cyberhack[]>) => Cyberhack[];
export const setCyberhacks: (state: Cyberhack[], action: PayloadAction<Cyberhack[]>) => void;
