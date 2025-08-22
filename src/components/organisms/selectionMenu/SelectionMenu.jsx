import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IconLabel from '../../atoms/iconLabel/IconLabel';
import ArrowMenu from '../../atoms/arrowMenu/ArrowMenu';
import MenuItemBg from '../../atoms/menuItemBg/MenuItemBg';
import './SelectionMenu.css';

const SelectionMenu = ({ items = [], selectedId, onSelect }) => {
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [localSelectedId, setLocalSelectedId] = useState(selectedId);

  // Update local state when prop changes
  useEffect(() => {
    setLocalSelectedId(selectedId);
    // Expand all parent items of the selected item
    if (selectedId) {
      const parentIds = findParentIds(items, selectedId);
      setExpandedItems(prev => new Set([...prev, ...parentIds]));
    }
  }, [selectedId, items]);

  // Find all parent IDs for a given item ID
  const findParentIds = (items, targetId, path = []) => {
    for (const item of items) {
      if (item.id === targetId) {
        return [...path];
      }
      if (item.children?.length) {
        const found = findParentIds(item.children, targetId, [...path, item.id]);
        if (found) return found;
      }
    }
    return [];
  };

  // Handle item selection
  const handleSelect = (item, event) => {
    event.stopPropagation();
    setLocalSelectedId(item.id);
    if (onSelect) {
      onSelect(item);
    }
  };

  // Toggle expanded state of an item
  const toggleExpand = (itemId, event) => {
    event.stopPropagation();
    setExpandedItems(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(itemId)) {
        newExpanded.delete(itemId);
      } else {
        newExpanded.add(itemId);
      }
      return newExpanded;
    });
  };

  // Render a single menu item
  const renderMenuItem = (item, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const isSelected = localSelectedId === item.id;

    const itemClasses = [
      'menu-item',
      isSelected ? 'menu-item--selected' : '',
      hasChildren ? 'menu-item--has-children' : '',
    ].filter(Boolean).join(' ');

    return (
      <li key={item.id} className={itemClasses}>
        <div 
          className="menu-item__content"
          onClick={(e) => hasChildren ? toggleExpand(item.id, e) : handleSelect(item, e)}
        >
          <MenuItemBg className={isSelected ? 'menu-item-bg--active' : 'menu-item-bg'} />
          {hasChildren && (
            <span className="menu-item__arrow">
              <ArrowMenu className={!isExpanded ? 'expanded' : ''} />
            </span>
          )}
          <span className="menu-item__label">
            {item.icon && <IconLabel icon={item.icon} />}
            {item.label}
          </span>
        </div>
        
        {hasChildren && isExpanded && (
          <ul className="menu-item__child-list">
            {item.children.map(child => renderMenuItem(child, level + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="selection-menu">
      <ul className="menu-container">
        {items.map(item => renderMenuItem(item))}
      </ul>
    </div>
  );
};

SelectionMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    children: PropTypes.array,
  })),
  selectedId: PropTypes.string,
  onSelect: PropTypes.func,
};

export default SelectionMenu;
