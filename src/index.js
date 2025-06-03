import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import ReduxProvider from './config/ReduxProvider'; // Importa el nuevo proveedor

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);