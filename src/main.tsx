import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import PlanetProvider from './context/planets-provider';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <BrowserRouter>
      <PlanetProvider>
        <App />
      </PlanetProvider>
    </BrowserRouter>,
  );
