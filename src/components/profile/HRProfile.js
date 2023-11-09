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
        <div className="All2">
          <div className="Container2">
        <div className="Left2">
          <div className="Rectangles-container2">
            <img src={rectangleImage} alt="Rectangle 1" className="Rectangle12" />
            <div className="Rectangle22">
            <div className="Profile-container2">
              <img src={profileImage} alt="profile"/>
              </div>
            <button className="Edit-button2">Edit</button>
            <div className="Name2">Mr Liew Jun Xi</div>
            <div className="Position2">HR</div>
            <div className="Company2">Company:</div>
            <div className="Fill2">Dell Inc.</div>
            <div className="Location2">Location:</div>
            <div className="Fill22">Klang, Selangor</div>
            
            </div>
          </div>
  
          <div className="Rectangle32">
            <div className="SameRow2">
            <div className="Title2">General information</div>
            <button className="Edit-button22">Edit</button>
            </div>
            <div className="Email2">Email</div>
            <div className="Email-address2">liew123@gmail.com</div>
            <div className="Country2">Country/Region</div>
            <div className="Email-address2">Malaysia</div>
            <div className="Country2">Phone Number</div>
            <div className="Email-address2">+60183643746</div>
          </div>
          
          <div className="Rectangle42">
            <div className="Title2">View Applicants</div>
            <button className="Edit-button32">View Full Lists</button>
          </div>

          </div>
          <div className="Right2">
            <div className="Title12">YOU MAY LIKE THESE JOB SEEKERS</div>
            <div className="Samerow32">
              <div className="Image2">
            <img src={person1} alt="person1"/>
            </div>
            <div className="Person12">Wong Suk Yen</div>
            </div>
  
            <div className="Samerow32">
              <div className="Image22">
            <img src={person2} alt="person2"/>
            </div>
            <div className="person22">Michael James Anderson</div>
            </div>
  
            <div className="Samerow32">
              <div className="Image32">
            <img src={person3} alt="person3"/>
            </div>
            <div className="Person32">David Robert Williams</div>
            </div>
  
            <div className="Recommendation2">
              SEE ALL RECOMMENDATIONS
            </div>
            
          </div>
        </div>
        
      
        </div>
      );
    }
  }
  
  export default ProfileComponent;
  