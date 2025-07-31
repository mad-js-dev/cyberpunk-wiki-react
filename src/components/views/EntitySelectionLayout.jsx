import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * A reusable layout component for entity selection views (Vehicles, Weapons, etc.)
 * 
 * @param {Object} props - Component props
 * @param {Function} props.getCategories - Selector function to get categories from the store
 * @param {Function} props.setSelectedId - Action creator to set the selected entity ID
 * @param {Function} props.getSelectedItem - Selector function to get the currently selected item
 * @param {string} props.entityType - The type of entity (e.g., 'weapons', 'vehicles') for class names
 * @param {React.ReactNode} [props.children] - Optional children to render in the layout
 * @param {Function} [props.onItemSelected] - Optional callback when an item is selected
 * @param {Function} [props.renderDetails] - Optional function to render entity details
 */
const EntitySelectionLayout = ({
  getCategories,
  setSelectedId,
  getSelectedItem,
  entityType,
  children,
  onItemSelected,
  renderDetails
}) => {
  const selectionMenuRef = useRef(null);
  const dispatch = useDispatch();
  
  // Select data from the store
  const categories = useSelector(getCategories);
  const selectedItem = useSelector(getSelectedItem);
  
  // Set up event listeners for the selection menu
  useEffect(() => {
    const menu = selectionMenuRef.current;
    if (!menu) return;
    
    console.log(`Setting up ${entityType} menu event listeners`);
    
    const handleEvent = (e) => {
      if (e.type === 'item-selected') {
        console.log('item-selected event captured on window', e);
        handleItemSelected(e);
      }
    };

    window.addEventListener('item-selected', handleEvent);
    
    // Clean up event listener on unmount
    return () => {
      console.log(`Cleaning up ${entityType} menu event listeners`);
      window.removeEventListener('item-selected', handleEvent);
    };
  }, [entityType]);
  
  // Handle item selection
  const handleItemSelected = useCallback((event) => {
    const itemId = event.detail?.id;
    console.log(`Item selected in ${entityType} menu:`, itemId);
    
    if (!itemId) {
      console.log('Ignoring test selection or missing ID');
      return;
    }
    
    // Update Redux store
    dispatch(setSelectedId(itemId));
    
    // Update menu selection
    if (selectionMenuRef.current) {
      selectionMenuRef.current.setAttribute('selected', itemId);
    }
    
    // Call the optional callback if provided
    if (onItemSelected) {
      onItemSelected(itemId, selectedItem);
    }
  }, [dispatch, entityType, onItemSelected, selectedItem, setSelectedId]);
  
  const styles = {
    layout: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: '2rem',
      padding: '2rem',
      height: '100%',
      minHeight: 'calc(100vh - 4rem)',
    },
    selectionMenu: {
      
    },
    entityDetails: {
      
    },
  };

  return (
    <div className={`entity-selection-layout ${entityType}-page`} style={styles.layout}>
      <div className="selection-menu-container" style={styles.selectionMenu}>
        <selection-menu
          ref={selectionMenuRef}
          items={JSON.stringify(categories)}
          class={`${entityType}-page__selection-menu`}
        />
      </div>
      
      <div className="entity-details-container" style={styles.entityDetails}>
        {selectedItem && renderDetails ? (
          renderDetails(selectedItem)
        ) : children}
      </div>
    </div>
  );
};

EntitySelectionLayout.propTypes = {
  getCategories: PropTypes.func.isRequired,
  setSelectedId: PropTypes.func.isRequired,
  getSelectedItem: PropTypes.func.isRequired,
  entityType: PropTypes.string.isRequired,
  children: PropTypes.node,
  onItemSelected: PropTypes.func,
  renderDetails: PropTypes.func,
};

export default EntitySelectionLayout;
