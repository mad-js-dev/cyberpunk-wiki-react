import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { 
  selectFilteredWeapons,
  selectSelectedWeapon, 
  selectCategories,
  selectWeaponTypes,
  selectRarities,
  selectAllWeapons,
  setSelectedId,
  setFilter,
  setSearchTerm,
  clearFilters,
  selectFilters,
  selectStatus,
  selectError
} from '../store/weaponsSlice';

// Import the SelectionMenu and CollapsibleItem components
import { SelectionMenu } from '../components/organisms/selection-menu/SelectionMenu';
import { CollapsibleItem } from '../components/molecules/collapsible-item/CollapsibleItem';

// Register the web components if not already registered
if (typeof window !== 'undefined') {
  if (!customElements.get('selection-menu')) {
    customElements.define('selection-menu', SelectionMenu);
  }
  if (!customElements.get('collapsible-item')) {
    customElements.define('collapsible-item', CollapsibleItem, { extends: 'li' });
  }
}

const WeaponsPage = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const selectionMenuRef = useRef(null);
  
  // State
  const [isClient, setIsClient] = useState(false);
  const [isComponentsReady, setIsComponentsReady] = useState(false);
  const [localSelectedWeapon, setLocalSelectedWeapon] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Selectors
  const weapons = useSelector(selectFilteredWeapons);
  const allWeapons = useSelector(selectAllWeapons);
  const selectedWeapon = useSelector(selectSelectedWeapon) || localSelectedWeapon;
  const categories = useSelector(selectCategories);
  const weaponTypes = useSelector(selectWeaponTypes);
  const rarities = useSelector(selectRarities);
  const filters = useSelector(selectFilters);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  // Set up event listeners for the SelectionMenu
  useEffect(() => {
    // Ensure the component is mounted on the client side
    setIsClient(true);
    
    // Set up menu listeners
    setupMenuListener();
    
    // Debug: Log when SelectionMenu is mounted and its ref
    console.log('SelectionMenu ref:', selectionMenuRef.current);
    
    // Debug: Log the items being passed to SelectionMenu
    const categories = getWeaponCategories();
    console.log('Categories passed to SelectionMenu:', categories);
    
    return () => {
      window.removeEventListener('item-selected', handleItemSelected);
    };
  }, [getWeaponCategories]);

  // Sync local state with Redux when selectedWeapon changes
  useEffect(() => {
    if (selectedWeapon) {
      setLocalSelectedWeapon(selectedWeapon);
    }
  }, [selectedWeapon]);

  // Set first weapon as selected by default if none is selected
  useEffect(() => {
    console.log('Weapons in effect:', weapons);
    if (weapons.length > 0 && !selectedWeapon) {
      const firstWeapon = weapons[0];
      console.log('Setting first weapon as selected:', firstWeapon);
      if (firstWeapon) {
        dispatch(setSelectedId(firstWeapon.id));
      }
    } else if (weapons.length === 0) {
      console.log('No weapons available to select');
    }
  }, [weapons, selectedWeapon, dispatch]);

  // Clear search when component unmounts
  useEffect(() => {
    return () => {
      dispatch(setSearchTerm(''));
    };
  }, [dispatch]);

  const setupMenuListener = () => {
    const menu = selectionMenuRef.current;
    if (menu) {
      console.log('Setting up menu event listeners for weapons');
      
      const handleEvent = (e) => {
        if (e.type === 'item-selected') {
          handleItemSelected(e);
        }
      };

      window.addEventListener('item-selected', handleEvent);
      
      return () => {
        console.log('Cleaning up menu event listeners');
        window.removeEventListener('item-selected', handleEvent);
      };
    }
  };

  const handleItemSelected = (event) => {
    const { detail } = event;
    if (detail && detail.id) {
      console.log('Weapon selected:', detail);
      dispatch(setSelectedId(detail.id));
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(setSearchTerm(query));
  };

  const handleFilterChange = (filterType, value) => {
    dispatch(setFilter({ filterType, value }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setSearchQuery('');
  };

  // Format weapons data for SelectionMenu
  const getWeaponCategories = useCallback(() => {
    if (!weapons || weapons.length === 0) {
      console.log('No weapons available for categories');
      return [];
    }
    
    // Group weapons by category
    const weaponsByCategory = weapons.reduce((acc, weapon) => {
      const category = weapon.category || 'Other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(weapon);
      return acc;
    }, {});

    // Convert to SelectionMenu format
    const categories = Object.entries(weaponsByCategory).map(([category, weaponsInCategory]) => ({
      label: category,
      children: weaponsInCategory.map(weapon => ({
        id: weapon.id,
        label: weapon.name,
        data: weapon,
        icon: weapon.icon
      }))
    }));
    
    console.log('Weapon categories:', categories);
    return categories;
  }, [weapons]);

  const renderWeaponDetails = () => {
    if (!selectedWeapon) {
      return (
        <div className="weapon-details--empty">
          <p>Select a weapon to view details</p>
        </div>
      );
    }

    return (
      <div className="weapon-details">
        <div className="weapon-details__header">
          <div className="weapon-details__icon">
            <img src={selectedWeapon.icon} alt={selectedWeapon.name} />
          </div>
          <div className="weapon-details__title">
            <h2>{selectedWeapon.name}</h2>
            <div className="weapon-details__meta">
              <span className="weapon-details__type">{selectedWeapon.type}</span>
              <span className={`weapon-details__rarity ${selectedWeapon.rarity.toLowerCase()}`}>
                {selectedWeapon.rarity}
              </span>
            </div>
          </div>
        </div>

        <div className="weapon-details__stats">
          <div className="stat-item">
            <span className="stat-label">Damage</span>
            <span className="stat-value">{selectedWeapon.damage}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">DPS</span>
            <span className="stat-value">{selectedWeapon.dps}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Fire Rate</span>
            <span className="stat-value">{selectedWeapon.fireRate}</span>
          </div>
          {selectedWeapon.magazine && (
            <div className="stat-item">
              <span className="stat-label">Magazine</span>
              <span className="stat-value">{selectedWeapon.magazine}</span>
            </div>
          )}
        </div>

        <div className="weapon-details__section">
          <h3>Description</h3>
          <p className="weapon-details__description">
            {selectedWeapon.description}
          </p>
        </div>

        {selectedWeapon.effects && selectedWeapon.effects.length > 0 && (
          <div className="weapon-details__section">
            <h3>Effects</h3>
            <ul className="weapon-effects">
              {selectedWeapon.effects.map((effect, index) => (
                <li key={index} className="weapon-effect">
                  <span className="effect-bullet">•</span>
                  {effect}
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedWeapon.stats && (
          <div className="weapon-details__section">
            <h3>Stats</h3>
            <div className="weapon-stats">
              {Object.entries(selectedWeapon.stats).map(([key, value]) => (
                <div key={key} className="stat-row">
                  <span className="stat-name">
                    {key.split(/(?=[A-Z])/).join(' ')}
                  </span>
                  <span className="stat-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  if (status === 'loading') {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Scanning weapons database...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>SYSTEM ERROR</h2>
        <p>{error}</p>
        <p>Please try again or contact system administrator.</p>
        <button 
          className="retry-button"
          onClick={() => window.location.reload()}
        >
          <span className="icon">⟳</span> Retry Connection
        </button>
      </div>
    );
  }

  return (
    <div className="weapons-page">
      <h1>Weapons Database</h1>
      
      {/* Search and Filters */}
      <div className="search-filters-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search weapons..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="filters">
          <div className="filter-group">
            <label htmlFor="category-filter">Category:</label>
            <select
              id="category-filter"
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="type-filter">Type:</label>
            <select
              id="type-filter"
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="all">All Types</option>
              {weaponTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="rarity-filter">Rarity:</label>
            <select
              id="rarity-filter"
              value={filters.rarity}
              onChange={(e) => handleFilterChange('rarity', e.target.value)}
            >
              <option value="all">All Rarities</option>
              {rarities.map((rarity) => (
                <option key={rarity} value={rarity}>
                  {rarity}
                </option>
              ))}
            </select>
          </div>

          <button className="clear-filters" onClick={handleClearFilters}>
            <span className="icon">×</span> Clear All
          </button>
        </div>
      </div>

      <div className="weapons-container">
        <div className="weapons-selection-menu">
          {isClient && (
            <selection-menu 
              ref={selectionMenuRef}
              items={JSON.stringify(getWeaponCategories())}
              selected-item-id={selectedWeapon?.id || ''}
              class="weapons-selection-menu__component"
              id="weapons-selection-menu"
            >
              <div slot="header">
                <h2>Weapons</h2>
                <p>{weapons.length} {weapons.length === 1 ? 'weapon' : 'weapons'} found</p>
              </div>
              
              {weapons.length === 0 && (
                <div className="no-results">
                  <div className="no-results-icon">
                    <span className="icon">🔍</span>
                  </div>
                  <h3>No weapons found</h3>
                  <p>Try adjusting your search or filters</p>
                  <button className="clear-filters" onClick={handleClearFilters}>
                    Clear all filters
                  </button>
                </div>
              )}
            </selection-menu>
          )}
        </div>

        <div className="weapon-details-container">
          {renderWeaponDetails()}
        </div>
      </div>

      <style>{`
        .loading-container, .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 50vh;
          text-align: center;
          color: #e0e0e0;
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 5px solid #333;
          border-top: 5px solid #00ff9f;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .retry-button {
          margin-top: 20px;
          padding: 10px 20px;
          background: #ff2a6d;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.2s;
        }

        .retry-button:hover {
          background: #ff4d7f;
        }

        .weapons-page {
          padding: 20px;
          color: #e0e0e0;
        }

        h1 {
          color: #00ff9f;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .search-filters-container {
          margin-bottom: 25px;
        }

        .search-container {
          position: relative;
          margin-bottom: 15px;
          max-width: 600px;
        }

        .search-input {
          width: 100%;
          padding: 12px 40px 12px 15px;
          background: rgba(30, 30, 50, 0.8);
          border: 1px solid #444;
          border-radius: 6px;
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #646cff;
          box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.3);
        }

        .search-icon {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #888;
          pointer-events: none;
        }

        .filters {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 20px;
          padding: 15px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
          align-items: center;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        label {
          font-size: 0.9rem;
          color: #888;
        }

        select {
          padding: 8px 12px;
          background: #1a1a2e;
          border: 1px solid #333;
          color: #fff;
          border-radius: 4px;
          cursor: pointer;
        }

        .clear-filters {
          margin-left: auto;
          padding: 8px 16px;
          background: #ff2a6d;
          border: none;
          color: white;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .clear-filters:hover {
          background: #ff4d7f;
        }

        .weapons-container {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 20px;
        }

        .weapons-selection-menu {
          width: 100%;
          height: 100%;
          min-height: 500px;
          position: relative;
          
          .loading-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            min-height: 300px;
            color: #888;
            
            .loading-spinner {
              width: 40px;
              height: 40px;
              border: 3px solid rgba(100, 108, 255, 0.3);
              border-radius: 50%;
              border-top-color: #646cff;
              animation: spin 1s ease-in-out infinite;
              margin-bottom: 15px;
            }
            
            p {
              margin: 0;
              font-size: 0.9rem;
            }
          }
          
          &__component {
            --selection-menu-bg: rgba(30, 30, 50, 0.8);
            --selection-menu-item-hover: rgba(100, 108, 255, 0.2);
            --selection-menu-item-selected: rgba(100, 108, 255, 0.3);
            --selection-menu-text: #e0e0e0;
            --selection-menu-border: 1px solid #444;
            --selection-menu-category-bg: rgba(0, 0, 0, 0.3);
            --selection-menu-category-text: #00ff9f;
            --selection-menu-scrollbar-thumb: #646cff;
            --selection-menu-scrollbar-track: #1a1a2e;
            
            height: 100%;
            border-radius: 8px;
            overflow: hidden;
          }
          
          :global(.selection-menu) {
            background: var(--selection-menu-bg);
            border: var(--selection-menu-border);
            border-radius: 8px;
            color: var(--selection-menu-text);
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          
          :global(.selection-menu__header) {
            padding: 15px;
            background: rgba(0, 0, 0, 0.2);
            border-bottom: 1px solid #333;
            
            h2 {
              margin: 0 0 5px 0;
              color: #00ff9f;
              font-size: 1.3rem;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            
            p {
              margin: 0;
              color: #aaa;
              font-size: 0.9rem;
            }
          }
          
          :global(.selection-menu__list) {
            flex: 1;
            overflow-y: auto;
            padding: 0;
            margin: 0;
            list-style: none;
            
            &::-webkit-scrollbar {
              width: 8px;
            }
            
            &::-webkit-scrollbar-track {
              background: var(--selection-menu-scrollbar-track);
            }
            
            &::-webkit-scrollbar-thumb {
              background-color: var(--selection-menu-scrollbar-thumb);
              border-radius: 4px;
            }
          }
          
          :global(.selection-menu__category) {
            margin: 0;
            padding: 10px 15px;
            background: var(--selection-menu-category-bg);
            color: var(--selection-menu-category-text);
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-left: 3px solid #646cff;
          }
          
          :global(.selection-menu__item) {
            padding: 12px 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: all 0.2s ease;
            border-left: 3px solid transparent;
            
            &:hover {
              background: var(--selection-menu-item-hover);
              border-left-color: #646cff;
            }
            
            &--selected {
              background: var(--selection-menu-item-selected) !important;
              border-left-color: #646cff;
              font-weight: bold;
            }
          }
          
          :global(.selection-menu__item-icon) {
            width: 30px;
            height: 30px;
            object-fit: contain;
            border-radius: 4px;
          }
          
          :global(.selection-menu__item-label) {
            flex: 1;
          }
          
          .no-results {
            padding: 30px 20px;
            text-align: center;
            color: #aaa;
            
            .no-results-icon {
              font-size: 2rem;
              margin-bottom: 15px;
              opacity: 0.7;
            }
            
            h3 {
              color: #fff;
              margin: 0 0 10px 0;
            }
            
            p {
              margin: 0 0 20px 0;
            }
            
            .clear-filters {
              background: transparent;
              border: 1px solid #646cff;
              color: #646cff;
              padding: 8px 16px;
              border-radius: 4px;
              cursor: pointer;
              transition: all 0.2s;
              
              &:hover {
                background: rgba(100, 108, 255, 0.1);
              }
            }
          }
          overflow-y: auto;
          padding-right: 10px;
        }

        .results-count {
          font-size: 0.9rem;
          color: #888;
          margin-bottom: 10px;
          padding: 0 8px;
        }

        .weapon-card {
          background: rgba(30, 30, 50, 0.7);
          border: 1px solid #333;
          border-radius: 6px;
          padding: 12px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          overflow: hidden;
        }

        .weapon-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: #646cff;
          transform: scaleY(0);
          transition: transform 0.2s ease;
        }

        .weapon-card:hover {
          background: rgba(50, 50, 80, 0.8);
          transform: translateX(3px);
        }

        .weapon-card:hover::before {
          transform: scaleY(1);
        }

        .weapon-card.selected {
          background: rgba(100, 108, 255, 0.15);
          border-color: #646cff;
        }

        .weapon-card.selected::before {
          transform: scaleY(1);
        }

        .no-results {
          text-align: center;
          padding: 40px 20px;
          background: rgba(30, 30, 50, 0.5);
          border-radius: 8px;
          border: 1px dashed #444;
        }

        .no-results-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
          opacity: 0.7;
        }

        .no-results h3 {
          color: #fff;
          margin-bottom: 10px;
        }

        .no-results p {
          color: #aaa;
          margin-bottom: 20px;
        }

        .no-results .clear-filters {
          background: transparent;
          border: 1px solid #646cff;
          color: #646cff;
        }

        .no-results .clear-filters:hover {
          background: rgba(100, 108, 255, 0.1);
        }

        .weapon-card__icon img {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }

        .weapon-card__info {
          flex: 1;
        }

        .weapon-card h3 {
          margin: 0 0 4px 0;
          color: #fff;
          font-size: 1rem;
        }

        .weapon-card__type {
          display: block;
          font-size: 0.8rem;
          color: #888;
          margin-bottom: 2px;
        }

        .weapon-card__rarity {
          font-size: 0.7rem;
          padding: 2px 6px;
          border-radius: 10px;
          background: #333;
          color: #fff;
        }

        .weapon-details-container {
          background: rgba(20, 20, 30, 0.9);
          border-radius: 8px;
          padding: 20px;
          color: #e0e0e0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          max-height: calc(100vh - 200px);
          overflow-y: auto;
        }

        .weapon-details--empty {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 300px;
          color: #646cff;
          font-style: italic;
        }

        .weapon-details__header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #333;
        }

        .weapon-details__icon img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          margin-right: 20px;
        }

        .weapon-details__title h2 {
          margin: 0 0 8px 0;
          color: #fff;
          font-size: 1.8rem;
        }

        .weapon-details__meta {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .weapon-details__type {
          color: #646cff;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .weapon-details__rarity {
          font-size: 0.8rem;
          padding: 2px 8px;
          border-radius: 10px;
          text-transform: uppercase;
          font-weight: bold;
        }

        .weapon-details__rarity.legendary {
          background: linear-gradient(45deg, #ff8a00, #ff0058);
          color: #fff;
        }

        .weapon-details__rarity.epic {
          background: #8a2be2;
          color: #fff;
        }

        .weapon-details__rarity.rare {
          background: #007bff;
          color: #fff;
        }

        .weapon-details__rarity.uncommon {
          background: #28a745;
          color: #fff;
        }

        .weapon-details__rarity.common {
          background: #6c757d;
          color: #fff;
        }

        .weapon-details__stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 20px;
          margin-bottom: 25px;
          background: rgba(0, 0, 0, 0.3);
          padding: 20px;
          border-radius: 8px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-label {
          display: block;
          color: #888;
          font-size: 0.85rem;
          margin-bottom: 5px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-value {
          color: #fff;
          font-weight: bold;
          font-size: 1.4rem;
          font-family: 'Courier New', monospace;
        }

        .weapon-details__section {
          margin-bottom: 25px;
        }

        .weapon-details__section h3 {
          color: #00ff9f;
          margin: 0 0 15px 0;
          font-size: 1.3rem;
          border-bottom: 1px solid #333;
          padding-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .weapon-details__description {
          line-height: 1.7;
          margin: 0 0 20px 0;
          color: #e0e0e0;
          font-size: 1.05rem;
        }

        .weapon-effects {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .weapon-effect {
          display: flex;
          align-items: flex-start;
          margin-bottom: 10px;
          line-height: 1.6;
          padding-left: 10px;
          position: relative;
        }

        .weapon-effect:before {
          content: '•';
          color: #00ff9f;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .weapon-stats {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 15px;
        }

        .stat-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }

        .stat-name {
          color: #aaa;
          text-transform: capitalize;
        }

        .no-results {
          text-align: center;
          padding: 40px 20px;
          color: #888;
          font-style: italic;
        }

        /* Responsive styles */
        @media (max-width: 992px) {
          .weapons-container {
            grid-template-columns: 1fr;
          }

          .weapons-list {
            max-height: 300px;
            margin-bottom: 20px;
          }

          .weapon-details-container {
            max-height: none;
          }
        }

        @media (max-width: 768px) {
          .filters {
                flex-direction: column;
          }

          .filter-group {
            width: 100%;
          }

          .clear-filters {
            width: 100%;
            margin-top: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default WeaponsPage;
