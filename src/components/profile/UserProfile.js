import React from 'react';
import './UserProfile.css';
import rectangleImage from './background.png'; // Import the image for rectangle1
import profileImage from './profile.png'; // Import the image for profile-pic
import logo from './logo.png';
import huawei from './huawei.png';
import intel from './intel.png';
import dell from './dell.png';
// import Navbar from './components/sidebar/navbar';

class ProfileComponent extends React.Component {
  render() {
    return (
      
      <div className="all">
        {/* <Navbar /> */}
        <div className="container">
      <div className="left">
        <div className="rectangles-container">
          <img src={rectangleImage} alt="Rectangle 1" className="rectangle1" />
          <div className="rectangle2">
          <div className="profile-container">
            <img src={profileImage} alt="profile"/>
            </div>
          <button className="edit-button">Edit</button>
          <div className="Jojo">Jojo</div>
          <div className="position">IT Developer</div>
          <div className="details">Experienced IT developer with a strong background in software development, specializing in web and mobile applications. Proficient in a range of programming languages and technologies, with a passion for creating efficient and innovative solutions to complex problems. A dedicated team player who excels in collaborative environments and has a proven track record of delivering high-quality software on time.</div>

          </div>
        </div>

        <div className="rectangle3">
          <div className="sameRow">
          <div className="title">General information</div>
          <button className="edit-button2">Edit</button>
          </div>
          <div className="email">Email</div>
          <div className="email-address">jojo123@gmail.com</div>
          <div className="country">Country/Region</div>
          <div className="email-address">Malaysia</div>
          <div className="country">Phone Number</div>
          <div className="email-address">+60198772374</div>
        </div>
        
        <div className="rectangle4">
        <div className="sameRow">
          <div className="title">Work Experience</div>
          <button className="edit-button3">Edit</button>
          </div>
          <div className="work">Freelance UX/UI designer (1 year)</div>
          <div className="company">Nintex Software Malaysia Sdn Bhd</div>
          <div className="duration">Jun 2022-Jun 2023</div>
          <div className="underline"></div>
          <div className="work">UX/UI designer (3 months)</div>
          <div className="company">VeecoTech</div>
          <div className="duration">July 2021-October 2021</div>
        </div>

        <div className="rectangle5">
        <div className="sameRow">
          <div className="title">Skills</div>
          <button className="edit-button4">Edit</button>
          </div>
          <div className="skill">Problem Solving Skill</div>
          <div className="underline"></div>
          <div className="skill">Leadership Skill</div>
          <div className="underline"></div>
          <div className="skill">Microsoft Office Suite</div>
          <div className="underline"></div>
          <div className="skill">Communication Skill</div>

        </div>

        <div className="rectangle6">
        <div className="sameRow">
          <div className="title">Education</div>
          <button className="edit-button5">Edit</button>
          </div>
          
          <div className="sameRow2">
            <img src={logo} alt="logo" className="logo" />
            <div className="column">
            <div className="university">
              University Malaya
            </div>
            <div className="bachelor">Bachelor of Computer Science</div>
            </div>
          </div>
          </div>
        </div>
        <div className="right">
          <div className="title1">YOU MAY LIKE THESE COMPANIES</div>
          <div className="samerow3">
            <div className="image">
          <img src={huawei} alt="huawei"/>
          </div>
          <div className="Huawei">Huawei Technologies (Malaysia) Sdn.Bhd.</div>
          </div>

          <div className="samerow3">
            <div className="image2">
          <img src={intel} alt="intel"/>
          </div>
          <div className="Intel">Intel Corporation</div>
          </div>

          <div className="samerow3">
            <div className="image3">
          <img src={dell} alt="dell"/>
          </div>
          <div className="Dell">Dell Technologies Inc. (DELL)</div>
          </div>

          <div className="recommendation">
            SEE ALL RECOMMENDATIONS
          </div>
          
        </div>
      </div>
      
    
      </div>
    );
  }
}

export default ProfileComponent;
