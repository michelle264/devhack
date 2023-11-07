// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbarHR.css';
import { FaSearch } from 'react-icons/fa'; // Import the FaSearch icon
import { FaBriefcase } from 'react-icons/fa';
import icon from './icon.png';
import profileHR from './profileHR.png'; 

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="left-section2">
        <div className="icon">
          <img src={icon} alt="icon" />
        </div>
        <strong className="aivibes">AiVides</strong>
        <div className="search">
          <input type="text" placeholder="Search" />
          <FaSearch className="search-icon" /> {/* Use the FaSearch icon */}
        </div>
      </div>
      <div className="menu">
        <Link to="/jobs">
          <FaBriefcase className="small-icon"/>
          <p className="menu-text">Jobs</p>
        </Link>
        <Link to="/HRProfile">
        <div className="small-icon3">
        <img src={profileHR} alt="profile"/>   
        <p className="menu-text">Profile</p>
          </div>
        </Link>
        <Link to="/logout">
          <i className="small-icon">&#128274;</i>
          <p className="menu-text">Logout</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
