import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { getVehicleCategories, selectSelectedId, getSelectedVehicle, setSelectedId, selectAllVehicles } from '../store/vehiclesSlice';
import '../styles/VehiclesPage.css';
/*
// Import the web components
import '@mad-js-dev/generic-webcomponents/dist/SelectionMenu-jDr1DbM1.js';
import '@mad-js-dev/generic-webcomponents/dist/ProductLayout-7yS6X1oE.js';
*/
const VehiclesPage = () => {
  // State
  const [isClient, setIsClient] = useState(false);
  const [isComponentsReady, setIsComponentsReady] = useState(false);
  const selectionMenuRef = useRef(null);
  const dispatch = useDispatch();
  const store = useStore();
  
  // Selectors
  const categories = useSelector(getVehicleCategories);
  const selectedId = useSelector(selectSelectedId);
  const allVehicles = useSelector(selectAllVehicles);
  const selectedVehicle = useSelector(getSelectedVehicle);
  
  // Local state for the selected vehicle - sync with Redux
  const [localSelectedVehicle, setLocalSelectedVehicle] = useState(selectedVehicle || null);
  
  // Sync local state with Redux when selectedVehicle changes
  useEffect(() => {
    console.log('Selected vehicle from Redux changed:', selectedVehicle?.id || 'none');
    setLocalSelectedVehicle(selectedVehicle || null);
  }, [selectedVehicle]);
  

  useEffect(() => {
    setupMenuListener();
  }, []);

  const setupMenuListener = () => {
    const menu = selectionMenuRef.current;
    if (menu) {
      console.log('Setting up menu event listeners');
      
      // Handle the event directly on the window since the event bubbles up
      const handleEvent = (e) => {
        if (e.type === 'item-selected') {
          console.log('item-selected event captured on window', e);
          handleItemSelected(e);
        }
      };

      window.addEventListener('item-selected', handleEvent);
      
      // Cleanup function
      return () => {
        console.log('Cleaning up menu event listeners');
        window.removeEventListener('item-selected', handleEvent);
      };
    } else {
      console.warn('Menu element not found when setting up listener');
    }
  };
/*
  // Debug selectedId changes
  useEffect(() => {
    console.group('Selected ID Update');
    console.log('selectedId changed:', selectedId);
    console.log('All vehicles count:', allVehicles.length);
    
    if (selectedId) {
      console.log('Looking for vehicle with ID:', selectedId);
      const vehicle = allVehicles.find(v => v.id === selectedId);
      
      if (!vehicle) {
        console.error('No vehicle found with ID:', selectedId);
        console.log('Available vehicle IDs:', allVehicles.map(v => v.id));
      } else {
        console.log('Found vehicle:', {
          id: vehicle.id,
          manufacturer: vehicle.manufacturer,
          model: vehicle.model,
          series: vehicle.series,
          hasImages: !!(vehicle.images && vehicle.images.length)
        });
      }
      
      setLocalSelectedVehicle(vehicle || null);
      
      // Also update the product-layout directly
      const productLayout = document.querySelector('product-layout');
      if (productLayout) {
        if (vehicle) {
          const title = `${vehicle.manufacturer || ''} ${vehicle.model || ''} ${vehicle.series || ''}`.trim();
          console.log('Directly updating product-layout title to:', title);
          
          // Try multiple ways to update the title
          productLayout.title = title;
          productLayout.setAttribute('title', title);
          
          if (vehicle.images && vehicle.images.length > 0) {
            console.log('Updating product-layout images:', vehicle.images);
            try {
              productLayout.images = vehicle.images;
              productLayout.setAttribute('images', JSON.stringify(vehicle.images));
            } catch (error) {
              console.error('Error setting images:', error);
            }
          }
        } else {
          console.log('No vehicle found, resetting product-layout');
          productLayout.title = 'Select a Vehicle';
          productLayout.setAttribute('title', 'Select a Vehicle');
          productLayout.removeAttribute('images');
        }
      } else {
        console.warn('product-layout element not found in DOM');
      }
    } else {
      console.log('No selectedId, resetting local state');
      setLocalSelectedVehicle(null);
    }
    
    console.groupEnd();
  }, [selectedId, allVehicles]);
  
  // Effect to handle selection when component mounts or selectedId changes
  useEffect(() => {
    console.group('VehiclesPage - Selection Update');
    console.log('Current selectedId:', selectedId);
    
    // If no vehicle is selected, ensure local state is cleared
    if (!selectedId) {
      console.log('No selectedId, clearing local selection');
      setLocalSelectedVehicle(null);
      console.groupEnd();
      return;
    }
    
    // If we have a selectedId but it doesn't match the current localSelectedVehicle
    if (!localSelectedVehicle || localSelectedVehicle.id !== selectedId) {
      console.log('Looking up vehicle with ID:', selectedId);
      const allVehicles = selectAllVehicles(store.getState());
      const vehicle = allVehicles.find(v => v.id === selectedId);
      
      if (vehicle) {
        console.log('Found vehicle, updating local state:', vehicle);
        setLocalSelectedVehicle(vehicle);
      } else {
        console.warn('No vehicle found for ID:', selectedId);
        // Clear the invalid selection
        dispatch(setSelectedId(null));
      }
    }
    
    console.groupEnd();
  }, [selectedId, store, dispatch]);
  */
/*
  // Clean up selection when component unmounts
  useEffect(() => {
    return () => {
      console.log('VehiclesPage unmounting, resetting selection');
      // Optionally clear the selection when leaving the page
      dispatch(setSelectedId(null));
    };
  }, [dispatch]);*/

  /*
  // Handle vehicle selection changes and update product layout
  useEffect(() => {
    console.log('useEffect - selectedId changed:', selectedId, 'allVehicles count:', allVehicles?.length);
    
    const updateProductLayout = (vehicle) => {
      console.log('Updating product layout with vehicle:', vehicle?.id || 'null');
      let productLayout = document.querySelector('product-layout');
      
      // If product layout doesn't exist yet, try to find it after a short delay
      if (!productLayout) {
        console.log('Product layout not found, will retry...');
        setTimeout(() => {
          productLayout = document.querySelector('product-layout');
          if (productLayout) {
            updateProductLayout(vehicle);
          }
        }, 100);
        return;
      }
      
      if (vehicle) {
        console.log('Updating product layout with vehicle:', vehicle.model || vehicle.id);
        // Ensure we're using the correct property names that match the web component's expectations
        const images = Array.isArray(vehicle.images) ? vehicle.images : [];
        productLayout.setAttribute('title', vehicle.model || vehicle.id);
        productLayout.setAttribute('images', JSON.stringify(images));
        
        // Force update by triggering a re-render
        productLayout._render();
      } else {
        console.log('Clearing product layout');
        productLayout.removeAttribute('title');
        productLayout.removeAttribute('images');
        productLayout._render();
      }
    };

    if (selectedId && Array.isArray(allVehicles) && allVehicles.length > 0) {
      const selected = allVehicles.find(v => v.id === selectedId);
      if (selected) {
        setLocalSelectedVehicle(selected);
        console.log('Selected vehicle updated:', selected);
        
        // Update product layout with a small delay to ensure it's in the DOM
        const timer = setTimeout(() => {
          updateProductLayout(selected);
        }, 50);
        
        return () => clearTimeout(timer);
      }
    } else {
      setLocalSelectedVehicle(null);
      console.log('No selected vehicle, clearing local state');
      
      // Clear product layout with a small delay
      const timer = setTimeout(() => {
        updateProductLayout(null);
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [selectedId, allVehicles]);
  */
/*
  // Direct ProductLayout update effect
  useEffect(() => {
    const productLayout = document.getElementById('vehicle-product-layout');
    if (!productLayout) return;

    console.log('Updating ProductLayout with vehicle:', localSelectedVehicle?.id);

    // Update title
    if (localSelectedVehicle) {
      const title = `${localSelectedVehicle.manufacturer || ''} ${localSelectedVehicle.model || ''} ${localSelectedVehicle.series || ''}`.trim();
      productLayout.title = title;
      productLayout.setAttribute('title', title);
      
      // Update images if they exist
      if (Array.isArray(localSelectedVehicle.images) && localSelectedVehicle.images.length > 0) {
        const validImages = localSelectedVehicle.images.map(img => ({
          src: img?.src || '',
          title: img?.title || '',
          alt: img?.alt || '',
          description: img?.description || ''
        }));
        productLayout.setAttribute('images', JSON.stringify(validImages));
      } else {
        productLayout.removeAttribute('images');
      }
    } else {
      // Reset to default state
      productLayout.title = 'Select a Vehicle';
      productLayout.setAttribute('title', 'Select a Vehicle');
      productLayout.removeAttribute('images');
    }
  }, [localSelectedVehicle]);
*/

  // Handle item selection
  const handleItemSelected = useCallback((event) => {
    const itemId = event.detail?.id;
    console.log('Item selected in menu:', itemId);
    
    if (itemId) {
      // Update Redux store
      dispatch(setSelectedId(itemId));
      
      // Update menu selection
      if (selectionMenuRef.current) {
        selectionMenuRef.current.setAttribute('selected', itemId);
      }
      
      // Find and update the product layout immediately
      const selected = allVehicles.find(v => v.id === itemId);
      if (selected) {
        const productLayout = document.querySelector('product-layout');
        if (productLayout) {
          console.log('Immediate update of product layout for:', selected.model || selected.id);
          productLayout.setAttribute('title', selected.model || selected.id);
          productLayout.setAttribute('images', JSON.stringify(selected.images || []));
        }
      }
      // The localSelectedVehicle will be updated by the sync effect
      // which watches for changes to selectedVehicle and selectedId
    } else {
      console.log('Ignoring test selection or missing ID');
    }
    
    console.groupEnd();
  }, [dispatch]);

  
  return (
    <div className="vehicles-page">
      <div className="vehicles-page__content">
        <div className="vehicles-page__header_wrapper">
          <h1 className="vehicles-page__title">Vehicles {selectedId || 'none'}</h1>
        </div>
        <div className="vehicles-page__categories">
          <h2 className="vehicles-page__categories-title">Brands</h2>
          <div className="selection-menu-container">
            <selection-menu
              ref={selectionMenuRef}
              items={JSON.stringify(categories)}
              class="vehicles-page__selection-menu"
            />
          </div>
        </div>
        
        <div className="vehicles-page__details">
         
            <div className="vehicles-page__vehicle-details">
              <div className="vehicles-page__product-layout">
                <div className="product-layout-container">
                {localSelectedVehicle && (
                  <product-layout 
                    id="vehicle-product-layout"
                    class="vehicles-page__product-layout"
                    key={`product-layout-${localSelectedVehicle?.id || 'none'}`}
                    title={`${localSelectedVehicle.manufacturer || ''} ${localSelectedVehicle.model || ''} ${localSelectedVehicle.series || ''}`.trim()}
                    images={localSelectedVehicle.images}
                  >
                    <div className="vehicles-details-content">
                      <div className="vehicles-page__description">
                        <p>{localSelectedVehicle.description || 'No description available for this vehicle.'}</p>
                      </div>
                    </div>
                  </product-layout>
                  )}
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default VehiclesPage;
