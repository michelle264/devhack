import React from 'react';
import './HRProfile.css'; 
import rectangleImage from './background.png'; 
import profileImage from './profileHR.png'; 
import person1 from './person1.png';
import person2 from './person2.png';
import person3 from './person3.png';

class ProfileComponent extends React.Component {
    render() {
      return (
        <div className="All">
          <div className="Container">
        <div className="Left">
          <div className="Rectangles-container">
            <img src={rectangleImage} alt="Rectangle 1" className="rectangle1" />
            <div className="Rectangle2">
            <div className="Profile-container">
              <img src={profileImage} alt="profile"/>
              </div>
            <button className="Edit-button">Edit</button>
            <div className="Name">Mr Liew Jun Xi</div>
            <div className="Position">HR</div>
            <div className="Company">Company:</div>
            <div className="Fill">Dell Inc.</div>
            <div className="Location">Location:</div>
            <div className="Fill2">Klang, Selangor</div>
            
            </div>
          </div>
  
          <div className="Rectangle3">
            <div className="SameRow">
            <div className="Title">General information</div>
            <button className="Edit-button2">Edit</button>
            </div>
            <div className="Email">Email</div>
            <div className="Email-address">liew123@gmail.com</div>
            <div className="Country">Country/Region</div>
            <div className="Email-address">Malaysia</div>
            <div className="Country">Phone Number</div>
            <div className="Email-address">+60183643746</div>
          </div>
          
          <div className="Rectangle4">
            <div className="Title">View Applicants</div>
            <button className="Edit-button3">View Full Lists</button>
          </div>

          </div>
          <div className="Right">
            <div className="Title1">YOU MAY LIKE THESE JOB SEEKERS</div>
            <div className="Samerow3">
              <div className="Image">
            <img src={person1} alt="person1"/>
            </div>
            <div className="Person1">Wong Suk Yen</div>
            </div>
  
            <div className="Samerow3">
              <div className="Image2">
            <img src={person2} alt="person2"/>
            </div>
            <div className="person2">Michael James Anderson</div>
            </div>
  
            <div className="Samerow3">
              <div className="Image3">
            <img src={person3} alt="person3"/>
            </div>
            <div className="Person3">David Robert Williams</div>
            </div>
  
            <div className="Recommendation">
              SEE ALL RECOMMENDATIONS
            </div>
            
          </div>
        </div>
        
      
        </div>
      );
    }
  }
  
  export default ProfileComponent;
  