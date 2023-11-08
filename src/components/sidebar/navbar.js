// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaSearch } from 'react-icons/fa'; // Import the FaSearch icon
import { FaBriefcase } from 'react-icons/fa';
import icon from './icon.png';
import profileImage from './profile.png'; 

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
        <Link to="/listjobjs">
          <FaBriefcase className="small-icon"/>
          <p className="menu-text">Jobs</p>
        </Link>
        <Link to="/UserProfile">
        <div className="small-icon3">
        <img src={profileImage} alt="profile"/>   
        <p className="menu-text">Profile</p>
          </div>
        </Link>
        <Link to="/">
          <i className="small-icon">&#128274;</i>
          <p className="menu-text">Logout</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
