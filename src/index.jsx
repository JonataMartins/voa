import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import back from './img/home/back1.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div
      className="app-background"
      style={{ backgroundImage: `url(${back})` }}
    >
      <App />
    </div>
  </React.StrictMode>
);


