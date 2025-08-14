import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import SelectionMenu from '../organisms/selection-menu/SelectionMenuReact';

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
  const dispatch = useDispatch();
  
  // Select data from the store
  const categories = useSelector(getCategories);
  const selectedItem = useSelector(getSelectedItem);
  
  // Handle item selection
  const handleItemSelected = useCallback((item) => {
    console.log(`Item selected in ${entityType} menu:`, item?.id);
    
    if (!item?.id) {
      console.log('Ignoring selection - missing item or ID');
      return;
    }
    
    // Update Redux store
    dispatch(setSelectedId(item.id));
    
    // Call the optional callback if provided
    if (onItemSelected) {
      onItemSelected(item.id, selectedItem);
    }
  }, [dispatch, entityType, onItemSelected, selectedItem, setSelectedId]);
  
  const styles = {
    layout: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: '3rem',
      padding: '2rem',
      height: '80vh',
      /*
      scrollbarColor: 'rgba(255, 0, 0, 0.8) rgba(255, 0, 0, 0.4)',
      WebkitScrollbar: {
        width: '10px',
        height: '10px',
        padding: '0',
      },
      WebkitScrollbarTrack: {
        width: '10px',
        height: '10px',
        backgroundColor: 'transparent',
      },
      WebkitScrollbarThumb: {
        backgroundColor: 'rgba(255, 0, 0, 0.8)',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(255, 0, 0, 0.5), inset 0 0 5px rgba(255, 0, 0, 0.5)',
      },
      WebkitScrollbarThumbHover: {
        backgroundColor: 'rgba(255, 0, 0, 1)',
        boxShadow: '0 0 15px rgba(255, 0, 0, 0.7), inset 0 0 8px rgba(255, 0, 0, 0.7)',
      },*/
    },
    selectionMenu: {
      
    },
    entityDetails: {
      
    },
  };

  return (
    <div className={`entity-selection-layout ${entityType}-page`} style={styles.layout}>
      <div className="selection-menu-container" style={styles.selectionMenu}>
        <SelectionMenu
          items={categories}
          selectedId={selectedItem?.id}
          onSelect={handleItemSelected}
          className={`${entityType}-page__selection-menu`}
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
