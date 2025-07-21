import { createSlice, createSelector } from '@reduxjs/toolkit';
import cyberhacksData from '../data/cyberhacks';

// Filter the data to only include Combat, Control, Covert, and Ultimate hacks
const filteredCyberhacks = {
  combat: cyberhacksData.combat || [],
  control: cyberhacksData.control || [],
  covert: cyberhacksData.covert || [],
  ultimate: cyberhacksData.ultimate || []
};

const filteredHackutils = {
  device: cyberhacksData.device || [],
  vehicle: cyberhacksData.vehicle || [],
};

// Categories metadata
const categories = [
  { id: 'combat', label: 'Combat Hacks' },
  { id: 'control', label: 'Control Hacks' },
  { id: 'covert', label: 'Covert Hacks' },
  { id: 'ultimate', label: 'Ultimate Hacks' },
];

// Categories metadata
const utils = [
  { id: 'device', label: 'Device Hacks' },
  { id: 'vehicle', label: 'Vehicle Hacks' },
];

// Define the initial state
const initialState = {
  cyberhacks: filteredCyberhacks,
  hackutils: filteredHackutils,
  status: 'idle',
  selectedId: null,
  selectedCategory: 'combat' // Default to combat quickhacks
};

// Create the slice
export const cyberhacksSlice = createSlice({
  name: 'cyberhacks',
  initialState,
  reducers: {
    setSelectedId: (state, action) => {
      state.selectedId = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
});

// Export actions
export const { setSelectedId, setSelectedCategory } = cyberhacksSlice.actions;

// Selectors
export const selectAllCyberhacks = (state) => state.cyberhacks.cyberhacks || {};
export const selectAllHackUtils = (state) => {
  const { device = [], vehicle = [] } = state.cyberhacks.hackutils || {};
  return [...device, ...vehicle];
};
export const selectSelectedId = (state) => state.cyberhacks.selectedId;
export const selectSelectedCategory = (state) => state.cyberhacks.selectedCategory;

export const selectCyberhacksByCategory = createSelector(
  [selectAllCyberhacks, selectSelectedCategory],
  (cyberhacks, category) => {
    return cyberhacks[category] || [];
  }
);

export const getSelectedCyberhack = createSelector(
  [selectAllCyberhacks, selectSelectedId, selectSelectedCategory],
  (cyberhacks, selectedId, selectedCategory) => {
    if (!selectedId || !selectedCategory) return null;
    const categoryHacks = cyberhacks[selectedCategory] || [];
    return categoryHacks.find(hack => hack.name === selectedId) || null;
  }
);

// Selector for categories with their metadata
export const selectCategories = createSelector(
  [selectAllCyberhacks],
  (cyberhacks) => {
    return categories.map(category => ({
      ...category,
      count: cyberhacks[category.id]?.length || 0
    }));
  }
);

// Selector for categories with their metadata
export const selectUtilsCategories = createSelector(
  [selectAllCyberhacks],
  (cyberhacks) => {
    return utils.map(util => ({
      ...util,
      count: cyberhacks[util.id]?.length || 0
    }));
  }
);

export default cyberhacksSlice.reducer;

