import { createSlice, createSelector } from '@reduxjs/toolkit';
import cyberhacksData from '../data/cyberhacks';

// Define the initial state
const initialState = {
  cyberhacks: cyberhacksData,
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

export const selectCyberhackCategories = createSelector(
  [selectAllCyberhacks],
  (cyberhacks) => {
    return Object.keys(cyberhacks).map(category => ({
      id: category,
      name: category.charAt(0).toUpperCase() + category.slice(1) + ' Quickhacks',
      count: cyberhacks[category]?.length || 0
    }));
  }
);

export default cyberhacksSlice.reducer;

