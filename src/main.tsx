import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.css';
import './components/atoms/icon-label/IconLabel.js';
import './components/molecules/collapsible-item/CollapsibleItem.js';
import './components/organisms/selection-menu/SelectionMenu.js';
import './components/organisms/image-collection/ImageCollection.js';
import './components/templates/product-layout/ProductLayout.js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
