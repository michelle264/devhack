import React from 'react';
import './LoginHome.css'; 
import logo1 from './logo.png';

class LoginHome extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="white-rectangle"></div>
          <div className="blue-rectangle">
            <img src={logo1} alt="Big Logo" className="big-logo" />
            <div className="headline">
              Your Future Starts Here:
            </div>
            <div className="headline2">
              Explore Opportunities with AiVides
            </div>
            <div className="subheadline">
              Your One-Stop Solution for Streamlining the Job Search and Hiring Process. Discover a World of Opportunities for Jobseekers, and Effortless Talent Acquisition for HR Managers. We're Here to Simplify Your Path to Success, Every Step of the Way.
            </div>
          </div>
        </div>
    );
  }
}

export default LoginHome;

