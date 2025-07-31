import { createEntitySlice, groupByField } from './sliceFactory';
import weaponsData from '../data/weapons';

export const {
  actions: weaponsActions,
  reducer: weaponsReducer,
  selectors: weaponsSelectors
} = createEntitySlice({
  name: 'weapons',
  initialData: weaponsData,
  groupBy: groupByField('type')
});

// Export the reducer as default
export default weaponsReducer;

// Export actions
export const { setSelectedId } = weaponsActions;

// Export all selectors with more semantic names
export const {
  selectAllData: selectAllWeapons,
  selectSelectedId: selectSelectedWeaponId,
  selectStatus: selectWeaponsStatus,
  selectSelectedItem: selectSelectedWeapon,
  selectGroupedData: selectWeaponsByType,
  selectDataTypes: selectWeaponTypes,
  selectDataByType: selectWeaponsByTypeName,
  getDataForSelection: getWeaponCategories
} = weaponsSelectors;
