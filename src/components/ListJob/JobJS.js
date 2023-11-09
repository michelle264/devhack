import React from 'react';
import './JobJS.css'; 
import intellogo from "./intel logo.png";
import googlelogo from "./google logo.png";
import amazonlogo from "./amazon logo.png";

class SearchJobsPage extends React.Component {
  render() {
    return (
      <div className="search-jobs-page">
        <div className="search-bar">
        <div className="search-input-container">
      <div className="search-input">
       <input type="text" placeholder="Keywords/Job title" />
     </div>
      <button className="advanced-filters-button">Advanced Filters</button>
    </div>
        </div>
        <div className="jobs-list">
          <h1 className="jobs-found">Jobs Found</h1>
          
           {/* First job item */}
          <div className="job-item">
        <div className="job-details">
          <div className="job-title-button">
            <button className="job-title-link">PRINCIPAL ENGINEER DATA SCIENTIST</button>
         </div>
         <div className="job-description">
         As a Principal Engineer - Data Scientist at Intel, you will play a crucial role in shaping our data science and engineering strategy, driving innovation, and contributing to the development of cutting-edge solutions.You will lead a team of data scientists and engineers, collaborating with cross-functional teams to develop and deploy data-driven applications, machine learning models, and advanced analytics solutions.
         You will also be responsible for setting the technical direction and providing expertise in data science and engineering.
         </div>
         <div className="apply-button">
         <button className="apply-button-link">APPLY</button>
         </div>
        </div>
         <div className="company-logo-container">
         <img src={intellogo} alt="Company Logo" className="company-logo" />
         </div>
        </div>
          {/* Second job item */}
          <div className="job-item">
        <div className="job-details">
          <div className="job-title-button">
            <button className="job-title-link">DATA SCIENCE MANAGER</button>
         </div>
         <div className="job-description">
         A Data Science Manager plays a pivotal role in overseeing a team of data scientists and leading data-driven initiatives within an organization. They are responsible for managing the team, setting the data strategy, and collaborating with other departments to translate business needs into actionable insights and data-driven solutions.
         Data Science Managers also provide technical leadership and ensure that projects are delivered successfully.
         </div>
         <div className="apply-button">
         <button className="apply-button-link">APPLY</button>
         </div>
        </div>
         <div className="company-logo-container">
         <img src={googlelogo} alt="Company Logo" className="company-logo" />
         </div>
        </div>
        {/* Third job item */}
        <div className="job-item">
        <div className="job-details">
          <div className="job-title-button">
            <button className="job-title-link">MACHINE LEARNING ENGINEER</button>
         </div>
         <div className="job-description">
         Machine Learning Engineers focus on designing, developing, and deploying machine learning models and algorithms. They work closely with data scientists to take machine learning models from the research and prototyping phase to production.
         Machine Learning Engineers are responsible for building scalable, efficient, and robust machine learning solutions and often work with software engineers to integrate these solutions into applications.
         </div>
         <div className="apply-button">
         <button className="apply-button-link">APPLY</button>
         </div>
        </div>
         <div className="company-logo-container">
         <img src={amazonlogo} alt="Company Logo" className="company-logo" />
         </div>
        </div>
        </div>
      </div>
    );
  }
}

export default SearchJobsPage;
