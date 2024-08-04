import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import App from './App';
import { HomeProvider } from './Context/HomeContext';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <React.StrictMode>
    <HomeProvider>
      <App />
    </HomeProvider>
  </React.StrictMode>
);
