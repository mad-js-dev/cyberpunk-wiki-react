import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectAllCyberhacks, 
  selectSelectedCategory, 
  getSelectedCyberhack,
  setSelectedId,
  setSelectedCategory as setSelectedCategoryAction
} from '../store/cyberhacksSlice';
import cyberhacksData from '../data/cyberhacks';

const CyberhacksPage = () => {
  const dispatch = useDispatch();
  const [selectedHack, setSelectedHack] = useState(null);
  
  // Get cyberhacks data from Redux store using selectors
  const cyberhacks = useSelector(selectAllCyberhacks);
  const selectedCategory = useSelector(selectSelectedCategory);
  const selectedHackFromStore = useSelector(getSelectedCyberhack);
  
  const handleCategorySelect = (category) => {
    dispatch(setSelectedCategoryAction(category));
  };
  
  // Category metadata
  const categories = [
    { id: 'combat', label: 'Combat Hacks', icon: '⚔️' },
    { id: 'control', label: 'Control Hacks', icon: '🎮' },
    { id: 'covert', label: 'Covert Hacks', icon: '🕵️' },
    { id: 'device', label: 'Device Hacks', icon: '💻' },
    { id: 'vehicle', label: 'Vehicle Hacks', icon: '🚗' },
    { id: 'ultimate', label: 'Ultimate Hacks', icon: '💥' },
  ];
  
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
    if (!selectedHack) return null;
    
    return (
      <div className="hack-details">
        <h2>{selectedHack.name}</h2>
        <div className="hack-stats">
          <p><strong>RAM Cost:</strong> {selectedHack.ramCost}</p>
          <p><strong>Upload Time:</strong> {selectedHack.uploadTime}s</p>
          <p><strong>Cooldown:</strong> {selectedHack.cooldown}s</p>
        </div>
        <p className="hack-description">{selectedHack.description}</p>
        <div className="hack-effects">
          <h3>Effects:</h3>
          <ul>
            {selectedHack.effects.map((effect, index) => (
              <li key={index}>{effect}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  return (
    <div className="cyberhacks-page">
      <h1 className="cyberhacks-page__title">Cyberhacks</h1>
      
      <div className="cyberhacks-page__categories">
        {categories.map(category => (
          <div key={category.id} className="cyberhacks-page__category">
            <h2 className="cyberhacks-page__category-title">
              {category.label}
            </h2>
            <div className="cyberhacks-page__category-hacks">
              {cyberhacks[category.id]?.map((hack, index) => (
                <div 
                  key={index} 
                  className={`cyberhacks-page__hack-item ${selectedHack?.name === hack.name ? 'cyberhacks-page__hack-item--selected' : ''}`}
                  onClick={() => handleHackSelect(hack)}
                >
                  <icon-label icon={hack.icon} label={hack.name} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <style>{`
        .cyberhacks-page {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
          color: #fff;
          font-family: 'Courier New', monospace;
        }

        .cyberhacks-page .icon-label {
          flex-direction: column;
        }

        .cyberhacks-page .icon-label span {
          height: 2.2rem;
          font-size: 12px;
        }

        .cyberhacks-page .icon-label img {
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
          flex-flow: row wrap;
          gap: 10px;
          margin: 2rem 0;
          overflow-x: auto;
          padding-bottom: 1rem;
        }
        
        .cyberhacks-page__category {
          background: rgba(0, 0, 0, 0.7);
          border-radius: 8px;
          padding: 1rem;
          border: 1px solid #ff2a6d;
          width: 46%;
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
