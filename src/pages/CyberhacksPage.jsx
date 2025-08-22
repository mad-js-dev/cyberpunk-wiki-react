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
      <h1 className="cyberhacks-page__title">Cyberhacks</h1>
      <div className="cyberhacks-page__hackSelector">
        <ul className="cyberhacks-page__categories">
          {categories.map(category => (
            <div key={category.id} className="cyberhacks-page__category">
              <li is="collapsible-item" label={category.label} hide-icon="true" class="cyberhacks-page__categoryCollapsible">
              
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
            </div>
          ))}
        </ul>
        <div className="cyberhacks-page__category-hacks">
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
      <div className="cyberhacks-page__hackDetails">
        {renderHackDetails()}
      </div>    
      

      <style>{`
        .cyberhacks-page {
          max-width: 1200px;
          margin: 0 auto;
          color: #fff;
          font-family: 'Courier New', monospace;
        }

        .cyberhacks-page__hackSelector {
          padding: 1rem;
          background: rgba(0, 0, 0, 0.7);
        }

        .cyberhacks-page__categoryCollapsible .collapsible-item__header span{
          word-break: break-all;
          writing-mode: sideways-lr;
        }

        .cyberhacks-page__categoryCollapsible.collapsible-item  {
          display: flex;
          flex-direction: row;
        }

        .cyberhacks-page__hack-item .cyberhacks-page__hack-icon {
          flex-direction: column;
        }

        .cyberhacks-page__hack-item .cyberhacks-page__hack-icon .label {
          height: 2.2rem;
          font-size: 12px;
        }

        .cyberhacks-page__hack-item .cyberhacks-page__hack-icon .icon {
          max-height: 120px;
          width: auto;
        }
        
        .cyberhacks-page__title {
          color: #00ff9f;
          text-align: center;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .cyberhacks-page__categories {
          display: flex;
          gap: 10px;
          margin: 2rem 0;
          overflow-x: auto;
          padding-left: 0;
        }
        
        .cyberhacks-page__category {
          background: rgba(0, 0, 0, 0.7);
          border-radius: 8px;
          padding: 1rem;
          border: 1px solid #ff2a6d;
          width: 100%;
        }

        /* Hack Details Styles */
        .cyberhacks-page__hackDetails {
          background: rgba(20, 20, 30, 0.9);
          border-radius: 8px;
          margin: 1rem;
          padding: 1.5rem;
          color: #e0e0e0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
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
          min-width: 600px;
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
