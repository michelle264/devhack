import React from 'react';
import logo1 from './logo.png';
import logo2 from './logo.png';
import './HomePage.css'; 

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="background">
          <div className="blue-rectangle">
            <img src={logo1} alt="Big Logo" className="big-logo" />
            <div className="headline">
              Your Future Starts Here: Explore Opportunities with AiVides
            </div>
            <div className="subheadline">
              Your One-Stop Solution for Streamlining the Job Search and Hiring Process. Discover a World of Opportunities for Jobseekers, and Effortless Talent Acquisition for HR Managers. We're Here to Simplify Your Path to Success, Every Step of the Way.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;

