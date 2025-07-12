import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { defineCustomElements } from '@mad-js-dev/generic-webcomponents/react';
import './index.css';
import App from './App.tsx';

// Initialize web components before rendering the app
defineCustomElements()
  .then(() => {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  })
  .catch(console.error);
