import React from 'react';
import './UserProfile.css'; 
import rectangleImage from './background.png'; // Import the image for rectangle1
import profileImage from './profile.png'; // Import the image for profile-pic
import logo from './logo.png';
import huawei from './huawei.png';
import intel from './intel.png';
import dell from './dell.png';

class ProfileComponent extends React.Component {
  render() {
    return (
      
      <div className="all1">
       
        <div className="container1">
      <div className="left1">
        <div className="rectangles-container1">
          <img src={rectangleImage} alt="Rectangle 1" className="rectangle11" />
          <div className="rectangle21">
          <div className="profile-container1">
            <img src={profileImage} alt="profile"/>
            </div>
          <button className="edit-button1">Edit</button>
          <div className="Jojo1">Jojo</div>
          <div className="position1">IT Developer</div>
          <div className="details1">Experienced IT developer with a strong background in software development, specializing in web and mobile applications. Proficient in a range of programming languages and technologies, with a passion for creating efficient and innovative solutions to complex problems. A dedicated team player who excels in collaborative environments and has a proven track record of delivering high-quality software on time.</div>

          </div>
        </div>

        <div className="rectangle31">
          <div className="sameRow1">
          <div className="title1">General information</div>
          <button className="edit-button21">Edit</button>
          </div>
          <div className="email1">Email</div>
          <div className="email-address1">jojo123@gmail.com</div>
          <div className="country1">Country/Region</div>
          <div className="email-address1">Malaysia</div>
          <div className="country1">Phone Number</div>
          <div className="email-address1">+60198772374</div>
        </div>
        
        <div className="rectangle41">
        <div className="sameRow1">
          <div className="title1">Work Experience</div>
          <button className="edit-button31">Edit</button>
          </div>
          <div className="work1">Freelance UX/UI designer (1 year)</div>
          <div className="company1">Nintex Software Malaysia Sdn Bhd</div>
          <div className="duration1">Jun 2022-Jun 2023</div>
          <div className="underline1"></div>
          <div className="work1">UX/UI designer (3 months)</div>
          <div className="company1">VeecoTech</div>
          <div className="duration1">July 2021-October 2021</div>
        </div>

        <div className="rectangle51">
        <div className="sameRow1">
          <div className="title1">Skills</div>
          <button className="edit-button41">Edit</button>
          </div>
          <div className="skill1">Problem Solving Skill</div>
          <div className="underline1"></div>
          <div className="skill1">Leadership Skill</div>
          <div className="underline1"></div>
          <div className="skill1">Microsoft Office Suite</div>
          <div className="underline1"></div>
          <div className="skill1">Communication Skill</div>

        </div>

        <div className="rectangle61">
        <div className="sameRow1">
          <div className="title1">Education</div>
          <button className="edit-button51">Edit</button>
          </div>
          
          <div className="sameRow21">
            <img src={logo} alt="logo" className="logo1" />
            <div className="column1">
            <div className="university1">
              University Malaya
            </div>
            <div className="bachelor1">Bachelor of Computer Science</div>
            </div>
          </div>
          </div>
        </div>
        <div className="right1">
          <div className="title11">YOU MAY LIKE THESE COMPANIES</div>
          <div className="samerow31">
            <div className="image1">
          <img src={huawei} alt="huawei1"/>
          </div>
          <div className="Huawei1">Huawei Technologies (Malaysia) Sdn.Bhd.</div>
          </div>

          <div className="samerow31">
            <div className="image21">
          <img src={intel} alt="intel"/>
          </div>
          <div className="Intel1">Intel Corporation</div>
          </div>

          <div className="samerow31">
            <div className="image31">
          <img src={dell} alt="dell"/>
          </div>
          <div className="Dell1">Dell Technologies Inc. (DELL)</div>
          </div>

          <div className="recommendation1">
            SEE ALL RECOMMENDATIONS
          </div>
          
        </div>
      </div>
      
    
      </div>
    );
  }
}

export default ProfileComponent;
