import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HomeProvider } from './Context/HomeContext';

ReactDOM.render(
  <HomeProvider>
    <App />
  </HomeProvider>,
  document.getElementById('root')
);
