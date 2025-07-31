import React from 'react';
import PropTypes from 'prop-types';

/**
 * Layout component for displaying weapon details
 * 
 * @param {Object} props - Component props
 * @param {Object} props.weapon - The weapon data to display
 * @param {Function} [props.onWeaponSelected] - Callback when a weapon is selected
 * @param {React.ReactNode} [props.children] - Optional children to render in the layout
 */
const WeaponLayout = ({ weapon, onWeaponSelected, children }) => {
  if (!weapon) {
    return (
      <div className="weapon-layout">
        <div className="no-selection">
          <h2>Select a weapon to view details</h2>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="weapon-layout">
      <div className="weapon-details">
        <h2>{weapon.name}</h2>
        <p><strong>Type:</strong> {weapon.type}</p>
        <p><strong>Rarity:</strong> {weapon.rarity}</p>
        <p><strong>Tech:</strong> {weapon.tech}</p>
        {weapon.damage && <p><strong>Damage:</strong> {weapon.damage}</p>}
        {weapon.description && <p>{weapon.description}</p>}
        {weapon.effects && (
          <div className="weapon-effects">
            <h4>Effects:</h4>
            <ul>
              {weapon.effects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

WeaponLayout.propTypes = {
  weapon: PropTypes.object,
  onWeaponSelected: PropTypes.func,
  children: PropTypes.node
};

export default WeaponLayout;
