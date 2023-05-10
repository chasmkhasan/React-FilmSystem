import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import MainComponents from './assets/components/shared/Index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainComponents/>
    <App />
  </React.StrictMode>,
)
