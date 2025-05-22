import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  once: true, // animation only happens once
  duration: 800, // animation duration in ms
  easing: 'ease-in-out',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
