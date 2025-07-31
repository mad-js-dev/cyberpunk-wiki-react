import React from 'react';
import { useDispatch } from 'react-redux';
import { 
  getWeaponCategories, 
  setSelectedId, 
  selectSelectedWeapon as getSelectedWeapon 
} from '../store/weaponsSlice';
import EntitySelectionLayout from '../components/views/EntitySelectionLayout';
import WeaponLayout from '../components/templates/WeaponLayout';

const WeaponsPage = () => {
  const dispatch = useDispatch();
  
  // Handle when a weapon is selected
  const handleWeaponSelected = (weaponId, weapon) => {
    console.log('Weapon selected:', weaponId, weapon);
    // Additional weapon-specific logic can go here
  };

  return (
    <EntitySelectionLayout
      getCategories={getWeaponCategories}
      setSelectedId={setSelectedId}
      getSelectedItem={getSelectedWeapon}
      entityType="weapons"
      onItemSelected={handleWeaponSelected}
      renderDetails={(weapon) => (
        <WeaponLayout weapon={weapon} onWeaponSelected={handleWeaponSelected}>
          {!weapon && (
            <div className="no-selection">
              <h2>Select a weapon to view details</h2>
              <p>Choose a weapon from the menu to see its details here.</p>
            </div>
          )}
        </WeaponLayout>
      )}
    />
  );
};

export default WeaponsPage;
