import React from 'react';
import PropTypes from 'prop-types';
import './WeaponLayout.css';

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
        <div className="weapon-header-wrapper">
          <div className="weapon-header">
            <div>
              <h2>{weapon.name}</h2>
            </div>
            <div>
              <span>{weapon.rarity}</span>
            </div>
          </div>
          <div className="weapon-type">
            <p>{weapon.type}</p>
          </div>
        </div>
        <div>
          {weapon.imageUrl && (
            <div className="weapon-image-container">
              <img 
                src={weapon.imageUrl} 
                alt={weapon.name}
                className="weapon-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}

        </div>
        {
          /*
            <p><strong>Type:</strong> {weapon.type}</p>
            <p><strong>Rarity:</strong> {weapon.rarity}</p>
            <p><strong>Tech:</strong> {weapon.tech}</p>
            {weapon.damage && <p><strong>Damage:</strong> {weapon.damage}</p>}
            {weapon.description && <p className="description">{weapon.description}</p>}
          */
        }
        
        {weapon.stats && (
          <div className="weapon-stats">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">Attack Speed</span>
                <div className="stat-value">
                  <div className="stat-bar" style={{ width: `${Math.min(weapon.stats.attackSpeed * 10, 100)}%` }}></div>
                  <span>{weapon.stats.attackSpeed.toFixed(1)} RPS</span>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-label">Damage per Hit</span>
                <div className="stat-value">
                  <div className="stat-bar" style={{ width: `${Math.min(weapon.stats.damagePerHit, 100)}%` }}></div>
                  <span>{weapon.stats.damagePerHit}</span>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-label">Reload Speed</span>
                <div className="stat-value">
                  <div className="stat-bar" style={{ width: `${100 - (weapon.stats.reloadSpeed * 30)}%` }}></div>
                  <span>{weapon.stats.reloadSpeed.toFixed(1)}s</span>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-label">Effective Range</span>
                <div className="stat-value">
                  <div className="stat-bar" style={{ width: `${Math.min(weapon.stats.effectiveRange * 2, 100)}%` }}></div>
                  <span>{weapon.stats.effectiveRange}m</span>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-label">Handling</span>
                <div className="stat-value">
                  <div className="stat-bar" style={{ width: `${weapon.stats.handling}%` }}></div>
                  <span>{weapon.stats.handling}/100</span>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-label">Headshot Multiplier</span>
                <div className="stat-value">
                  <div className="stat-bar" style={{ width: `${(weapon.stats.headshotMultiplier - 1) * 100}%` }}></div>
                  <span>{weapon.stats.headshotMultiplier}x</span>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-label">Armor Penetration</span>
                <div className="stat-value">
                  <div className="stat-bar" style={{ width: `${weapon.stats.armorPenetration * 100}%` }}></div>
                  <span>{(weapon.stats.armorPenetration * 100).toFixed(0)}%</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
      </div>
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
  );
};

WeaponLayout.propTypes = {
  weapon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    rarity: PropTypes.string,
    tech: PropTypes.string,
    damage: PropTypes.string,
    description: PropTypes.string,
    effects: PropTypes.arrayOf(PropTypes.string),
    stats: PropTypes.shape({
      attackSpeed: PropTypes.number,
      damagePerHit: PropTypes.number,
      reloadSpeed: PropTypes.number,
      effectiveRange: PropTypes.number,
      handling: PropTypes.number,
      headshotMultiplier: PropTypes.number,
      armorPenetration: PropTypes.number
    }),
    imageUrl: PropTypes.string
  }),
  onWeaponSelected: PropTypes.func,
  children: PropTypes.node
};

export default WeaponLayout;
