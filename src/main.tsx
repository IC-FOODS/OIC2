import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import AppShell from './components/AppShell';

/**
 * Main application entry point.
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppShell />
  </React.StrictMode>
);
