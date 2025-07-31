import { createSlice, createSelector } from '@reduxjs/toolkit';

export const createEntitySlice = ({
  name,
  initialData,
  groupBy,
  idField = 'id'
}) => {
  // Initial state
  const initialState = {
    data: groupBy ? groupBy(initialData) : initialData,
    selectedId: null,
    status: 'idle'
  };

  // Create slice
  const slice = createSlice({
    name,
    initialState,
    reducers: {
      setSelectedId: (state, { payload }) => {
        state.selectedId = payload;
      },
      updateStatus: (state, { payload }) => {
        state.status = payload;
      }
    }
  });

  // Base selectors
  const selectSlice = (state) => state[name] || {};
  const selectAllData = (state) => selectSlice(state).data || [];
  const selectSelectedId = (state) => selectSlice(state).selectedId;
  const selectStatus = (state) => selectSlice(state).status;

  // Memoized selectors
  const selectSelectedItem = createSelector(
    [selectAllData, selectSelectedId],
    (data, selectedId) => {
      if (!selectedId || !data) return null;
      return Array.isArray(data) 
        ? data.find(item => item[idField] === selectedId)
        : Object.values(data).flat().find(item => item[idField] === selectedId);
    }
  );

  // If data is grouped, create additional selectors
  let additionalSelectors = {};
  
  if (groupBy) {
    additionalSelectors = {
      selectGroupedData: selectAllData,
      selectDataTypes: createSelector(
        [selectAllData],
        (data) => Object.keys(data)
      ),
      selectDataByType: (type) => createSelector(
        [selectAllData],
        (data) => data[type] || []
      ),
      // Format data for SelectionMenu component
      getDataForSelection: createSelector(
        [selectAllData],
        (data) => Object.entries(data).map(([type, items]) => ({
          id: `type_${type.replace(/\s+/g, '_').toLowerCase()}`,
          name: type,
          label: type,
          type: 'category',
          children: items.map(({ children, ...item }) => ({
            ...item,
            label: item.name,
            id: item[idField]
          }))
        }))
      )
    };
  } else {
    additionalSelectors = {
      selectFlatData: selectAllData,
      // Format flat data for SelectionMenu component
      getDataForSelection: createSelector(
        [selectAllData],
        (data) => ({
          id: `all_${name}`,
          name: `All ${name}`,
          label: `All ${name}`,
          type: 'category',
          children: data.map(item => ({
            ...item,
            label: item.name || item.model,
            id: item[idField]
          }))
        })
      )
    };
  }

  return {
    ...slice,
    actions: slice.actions,
    selectors: {
      selectAllData,
      selectSelectedId,
      selectStatus,
      selectSelectedItem,
      ...additionalSelectors
    }
  };
};

// Helper function to group data by a specific field
export const groupByField = (field) => (data) => 
  data.reduce((acc, item) => ({
    ...acc,
    [item[field]]: [...(acc[item[field]] || []), item]
  }), {});
