import React from 'react';
import './UserProfile.css'; // Import your CSS file
import rectangleImage from './background.png'; // Import the image for rectangle1
import profileImage from './profile.png'; // Import the image for profile-pic

class ProfileComponent extends React.Component {
  render() {
    return (
      <div className="all">
      <div className="container">
        <div className="rectangles-container">
          <img src={rectangleImage} alt="Rectangle 1" className="rectangle1" />
          <div className="rectangle2"></div>
        </div>
        <div className="profile-container">
          <div className="profile-pic" style={{ backgroundImage: `url(${profileImage})` }}>
            <button className="edit-button">Edit</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ProfileComponent;
