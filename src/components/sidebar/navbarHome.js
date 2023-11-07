// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbarHome.css';
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
      <div className="menu">
      <Link to="/login">
          <button className="menu-button1">Log in</button>
        </Link>
        <Link to="/signup">
          <button className="menu-button2">Sign up</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
