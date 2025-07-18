import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './components/atoms/icon-label/IconLabel.js';
import './components/molecules/collapsible-item/CollapsibleItem.js';
import './components/organisms/selection-menu/SelectionMenu.js';
import './components/organisms/image-collection/ImageCollection.js';
import './components/templates/product-layout/ProductLayout.js';


import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
