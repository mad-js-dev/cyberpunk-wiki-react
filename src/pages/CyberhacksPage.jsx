import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectAllCyberhacks, 
  selectSelectedCategory, 
  getSelectedCyberhack,
  selectCategories,
  selectAllHackUtils,
  setSelectedId,
  setSelectedCategory as setSelectedCategoryAction
} from '../store/cyberhacksSlice';
import cyberhacksData from '../data/cyberhacks';
import IconLabel from '../components/atoms/iconLabel/IconLabel';

const CyberhacksPage = () => {
  const dispatch = useDispatch();
  const [selectedHack, setSelectedHack] = useState(null);
  
  // Get cyberhacks data from Redux store using selectors
  const cyberhacks = useSelector(selectAllCyberhacks);
  const hackutils = useSelector(selectAllHackUtils);
  const selectedCategory = useSelector(selectSelectedCategory);

  const selectedHackFromStore = useSelector(getSelectedCyberhack);
  
  const handleCategorySelect = (category) => {
    dispatch(setSelectedCategoryAction(category));
  };
  
  // Get categories from Redux store
  const categories = useSelector(selectCategories);
  
  // Set the first hack as selected by default if none is selected
  useEffect(() => {
    if (cyberhacks[selectedCategory]?.length > 0 && !selectedHack && !selectedHackFromStore) {
      setSelectedHack(cyberhacks[selectedCategory][0]);
    } else if (selectedHackFromStore) {
      setSelectedHack(selectedHackFromStore);
    }
  }, [cyberhacks, selectedCategory, selectedHack, selectedHackFromStore]);
  
  const handleHackSelect = (hack) => {
    dispatch(setSelectedId(hack.name));
    setSelectedHack(hack);
  };
  
  const renderHackDetails = () => {
    if (!selectedHack) return (
      <div className="hack-details--empty">
        <p>Select a hack to view details</p>
      </div>
    );
    
    return (
      <div className="hack-details">
        <div className="hack-details__header">
          <div className="hack-details__icon">
            <img src={selectedHack.icon} alt={selectedHack.name} />
          </div>
          <div className="hack-details__title">
            <h2>{selectedHack.name}</h2>
            <span className="hack-details__type">{selectedHack.type || 'Quickhack'}</span>
          </div>
        </div>
        
        <div className="hack-details__stats">
          <div className="stat-item">
            <span className="stat-label">RAM Cost</span>
            <span className="stat-value">{selectedHack.ramCost}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Upload Time</span>
            <span className="stat-value">{selectedHack.uploadTime}s</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Cooldown</span>
            <span className="stat-value">{selectedHack.cooldown}s</span>
          </div>
        </div>
        
        <div className="hack-details__section">
          <h3>Description</h3>
          <p className="hack-details__description">{selectedHack.description}</p>
        </div>
        
        {selectedHack.effects && selectedHack.effects.length > 0 && (
          <div className="hack-details__section">
            <h3>Effects</h3>
            <ul className="hack-effects">
              {selectedHack.effects.map((effect, index) => (
                <li key={index} className="hack-effect">
                  <span className="effect-bullet">•</span>
                  <span>{effect}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {selectedHack.notes && (
          <div className="hack-details__section">
            <h3>Notes</h3>
            <p className="hack-notes">{selectedHack.notes}</p>
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div className="cyberhacks-page">
      {/* Left Panel - Categories */}
      <div className="cyberhacks-page__categories-container">
        <h3 className="cyberhacks-page__panel-title">Offensive Hacks</h3>
        <ul className="cyberhacks-page__categories">
          {categories.map(category => (
            <li key={category.id} className="cyberhacks-page__category">
              <div 
                className="cyberhacks-page__category-header"
                onClick={() => handleCategorySelect(category.id)}
              >
                {category.label}
              </div>
              <div className="cyberhacks-page__category-hacks">
                {cyberhacks[category.id]?.map((hack, index) => (
                  <div 
                    key={index} 
                    className={`cyberhacks-page__hack-item ${selectedHack?.name === hack.name ? 'cyberhacks-page__hack-item--selected' : ''}`}
                    onClick={() => handleHackSelect(hack)}
                  >
                    <IconLabel icon={hack.icon} label={hack.name} className="cyberhacks-page__hack-icon" />
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Middle Panel - Hack Details */}
      <div className="cyberhacks-page__hackDetails">
        {renderHackDetails()}
      </div>
      
      {/* Right Panel - Utilities */}
      {hackutils.length > 0 && (
        <div className="cyberhacks-page__utilities-panel">
          <h3 className="cyberhacks-page__panel-title">Utility Hacks</h3>
          <div className="cyberhacks-page__utilities-grid">
            {hackutils.map((hack, index) => (
              <div 
                key={index} 
                className={`cyberhacks-page__hack-item ${selectedHack?.name === hack.name ? 'cyberhacks-page__hack-item--selected' : ''}`}
                onClick={() => handleHackSelect(hack)}
              >
                <IconLabel icon={hack.icon} label={hack.name} className="cyberhacks-page__hack-icon" />
              </div>
            ))}
          </div>
        </div>
      )}    
      

      <style>{`
        .cyberhacks-page {
          display: grid;
          grid-template-columns: 370px 1fr 300px;
          height: calc(100vh - 2rem);
          margin: 0 1rem;
          color: #fff;
          font-family: 'Courier New', monospace;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 8px;
          overflow: hidden;
        }

        .cyberhacks-page__categories-container {
          background: rgba(0, 0, 0, 0.5);
          border-right: 1px solid #333;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          min-height: 0;
          flex: 1;
          overflow-y: auto;
        }

        .cyberhacks-page__categories {
          list-style: none;
          padding: 0;
          margin: 1rem 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          min-height: 0;
          overflow-y: auto;
          flex: 1;
        }

        .cyberhacks-page__category {
          background: rgba(0, 0, 0, 0.5);
          border-radius: 6px;
          border: 1px solid #333;
          transition: all 0.2s ease;
          display: flex;
          overflow: hidden;
          min-height: 0;
        }
        
        .cyberhacks-page__category:hover {
          border-color: #ff2a6d;
          background: rgba(255, 42, 109, 0.1);
        }

        .cyberhacks-page__category-header {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          padding: 0.5rem 0.5rem 1rem 0.5rem;
          cursor: pointer;
          color: #00ff9f;
          font-weight: bold;
          background: rgba(0, 0, 0, 0.3);
          text-align: left;
          white-space: nowrap;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          height: 100%;
        }

        .cyberhacks-page__category-hacks {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 0.75rem;
          padding: 0.5rem 0.75rem;
          width: 100%;
          min-height: 0;
          min-width: 0;
        }

        .cyberhacks-page__hack-item {
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 0;
          min-width: 0;
          overflow: hidden;
          height: 60px;
        }
        
        .cyberhacks-page__hack-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          width: 100%;
          height: 100%;
        }
        
        .cyberhacks-page__hack-icon .icon {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }
        
        .cyberhacks-page__hack-icon .label {
          font-size: 12px;
          line-height: 1.1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        .cyberhacks-page__hack-item:hover {
          background: rgba(0, 255, 159, 0.1);
        }

        .cyberhacks-page__hack-item--selected {
          background: rgba(0, 255, 159, 0.2) !important;
          border-left: 3px solid #00ff9f;
        }

        .cyberhacks-page__hack-item .cyberhacks-page__hack-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          width: 100%;
          height: 100%;
        }

        .cyberhacks-page__hack-item .cyberhacks-page__hack-icon .label {
          font-size: 14px;
          height: auto;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cyberhacks-page__hack-item .cyberhacks-page__hack-icon .icon {
          width: 24px;
          height: 24px;
          min-width: 24px;
        }

        .cyberhacks-page__utilities-panel {
          background: rgba(0, 0, 0, 0.5);
          border-left: 1px solid #333;
          padding: 1rem;
          overflow-y: auto;
        }

        .cyberhacks-page__panel-title {
          color: #00ff9f;
          margin: 0 0 1rem 0;
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #333;
        }

        .cyberhacks-page__utilities-grid,
        .cyberhacks-page__category-hacks {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          padding: 0.5rem 0.75rem;
          min-height: 0;
          min-width: 0;
        }

        .cyberhacks-page__hackDetails {
          background: rgba(20, 20, 30, 0.9);
          padding: 1.5rem;
          color: #e0e0e0;
          overflow-y: auto;
        }

        .hack-details--empty {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 200px;
          color: #646cff;
          font-style: italic;
          font-size: 1.2rem;
        }

        .hack-details__header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #333;
        }

        .hack-details__icon img {
          width: 64px;
          height: 64px;
          object-fit: contain;
          margin-right: 1.5rem;
        }

        .hack-details__title h2 {
          margin: 0 0 0.25rem 0;
          color: #fff;
          font-size: 1.75rem;
        }

        .hack-details__type {
          color: #646cff;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hack-details__stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
          background: rgba(0, 0, 0, 0.3);
          padding: 1.25rem;
          border-radius: 6px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-label {
          color: #888;
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-value {
          color: #fff;
          font-weight: bold;
          font-size: 1.25rem;
          font-family: 'Courier New', monospace;
        }

        .hack-details__section {
          margin-bottom: 2rem;
        }

        .hack-details__section h3 {
          color: #00ff9f;
          margin: 0 0 1rem 0;
          font-size: 1.2rem;
          border-bottom: 1px solid #333;
          padding-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hack-details__description {
          line-height: 1.7;
          margin: 0;
          color: #e0e0e0;
        }

        .hack-effects {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .hack-effect {
          display: flex;
          align-items: flex-start;
          margin-bottom: 0.75rem;
          line-height: 1.6;
        }

        .effect-bullet {
          color: #00ff9f;
          margin-right: 0.75rem;
          font-weight: bold;
          flex-shrink: 0;
          margin-top: 0.2em;
        }

        .hack-notes {
          font-style: italic;
          color: #aaa;
          margin: 0;
          padding: 1rem;
          background: rgba(0, 255, 159, 0.08);
          border-radius: 4px;
          border-left: 3px solid #00ff9f;
        }
        
     
        .cyberhacks-page__category-title {
          color: #05d9e8;
          margin-top: 0;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
        }
        
        .cyberhacks-page__category-icon {
          font-size: 1.8rem;
          margin-right: 0.5rem;
        }
        
        .cyberhacks-page__category-hacks {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          min-width: 300px;
        }
        
        .cyberhacks-page__hack-item {
          display: flex;
          align-items: center;
          padding: 10px;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .cyberhacks-page__hack-item:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .cyberhacks-page__hack-item--selected {
          background-color: rgba(255, 255, 255, 0.2);
        }
        
        .cyberhacks-page__tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          border-bottom: 1px solid #333;
          padding-bottom: 10px;
        }
        
        .cyberhacks-page__tab {
          background: #1a1a1a;
          border: 1px solid #333;
          color: #fff;
          padding: 10px 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
        
        .cyberhacks-page__tab:hover,
        .cyberhacks-page__tab--active {
          background: #00ff9f;
          color: #000;
          border-color: #00ff9f;
        }
        
        .cyberhacks-page__container {
          display: flex;
          gap: 20px;
        }
        
        .cyberhacks-page__list {
          flex: 1;
          max-width: 300px;
          background: #0a0a0a;
          border: 1px solid #333;
          border-radius: 5px;
          overflow-y: auto;
          max-height: 70vh;
        }
        
        .cyberhacks-page__hack-item {
          padding: 0 0 20px 0px;
          border-bottom: 1px solid #333;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .cyberhacks-page__hack-item:hover,
        .cyberhacks-page__hack-item--selected {
          background: #1a1a1a;
          border-left: 3px solid #00ff9f;
        }
        
        .cyberhacks-page__hack-name {
          margin: 5px 0;
          color: #00ff9f;
        }
        
        .cyberhacks-page__hack-ram {
          color: #888;
          font-size: 0.9em;
          margin: 5px 0 0;
        }
        
        .cyberhacks-page__details {
          flex: 2;
          background: #0a0a0a;
          border: 1px solid #333;
          border-radius: 5px;
          padding: 20px;
        }
        
        .cyberhacks-page__details-title {
          color: #00ff9f;
          margin-top: 0;
        }
        
        .cyberhacks-page__stats {
          display: flex;
          gap: 20px;
          margin: 15px 0;
          color: #ccc;
        }
        
        .cyberhacks-page__description {
          font-size: 1.1em;
          line-height: 1.5;
          margin-bottom: 20px;
        }
        
        .cyberhacks-page__effects-title {
          color: #00ff9f;
          margin-bottom: 10px;
        }
        
        .cyberhacks-page__effects-list {
          padding-left: 20px;
        }
        
        .cyberhacks-page__effects-item {
          margin-bottom: 8px;
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
};

export default CyberhacksPage;
