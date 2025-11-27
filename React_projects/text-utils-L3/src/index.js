import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>starts the react app in strict mode (it uses "use strict";)
   /* <App> will launch the react-app, it will run App.js file and load whatever is written/imported inside that */
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

reportWebVitals();
