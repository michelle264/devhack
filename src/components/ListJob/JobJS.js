import React from 'react';
import './JobJS.css'; 
import intellogo from "./intel logo.png";

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
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.
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
            <button className="job-title-link">PRINCIPAL ENGINEER DATA SCIENTIST</button>
         </div>
         <div className="job-description">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.
         </div>
         <div className="apply-button">
          {/* link to applypage! */}
         {/* <Link to="/applypage"> */}
         <button className="apply-button-link">APPLY</button>
         {/* </Link> */}
         </div>
        </div>
         <div className="company-logo-container">
         <img src={intellogo} alt="Company Logo" className="company-logo" />
         </div>
        </div>
        {/* Third job item */}
        <div className="job-item">
        <div className="job-details">
          <div className="job-title-button">
            <button className="job-title-link">PRINCIPAL ENGINEER DATA SCIENTIST</button>
         </div>
         <div className="job-description">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.
         </div>
         <div className="apply-button">
         <button className="apply-button-link">APPLY</button>
         </div>
        </div>
         <div className="company-logo-container">
         <img src={intellogo} alt="Company Logo" className="company-logo" />
         </div>
        </div>
        </div>
      </div>
    );
  }
}

export default SearchJobsPage;
