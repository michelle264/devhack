// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbarRegister.css';
import icon from './icon.png';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="left-section2">
        <div className="icon">
          <img src={icon} alt="icon" />
        </div>
        <strong className="aivibes">AiVides</strong>
      </div>

    </nav>
  );
};

export default NavigationBar;
