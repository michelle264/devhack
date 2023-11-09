import React from 'react';
import './HRJob.css';
import { Link } from 'react-router-dom';

class HRJob extends React.Component{
    render(){
        return(
        <div className='container'>
            <div className='searchbar'>
                <div className='section'>Keywords/job title</div>
                <div className='filter'>Advanced filters</div>
            </div>

            <div className='job'>
                <div className='box'>
                    <div className='card-left'>
                        <div className='card-title'>Principal Engineer Data Scientist</div>
                        <div className='card-details'> As a Principal Engineer - Data Scientist at Intel, you will play a crucial role in shaping our data science and engineering strategy, driving innovation, and contributing to the development of cutting-edge solutions.You will lead a team of data scientists and engineers, collaborating with cross-functional teams to develop and deploy data-driven applications, machine learning models, and advanced analytics solutions.
         You will also be responsible for setting the technical direction and providing expertise in data science and engineering.</div> 
                        <Link to="/Resume">
                        <button className='check-button'>CHECK</button>
                        </Link>
                    </div>
                    <div className='card-right'>department of computers and information technology</div>
                </div>

                <div className='box'>
                    <div className='card-left'>
                        <div className='card-title'>Backend Programmer</div>
                        <div className='card-details'>Responsible for designing, developing, and maintaining the server-side components of a software application or website. They work with databases, server infrastructure, and application logic to ensure that the system functions efficiently and securely, often focusing on the functionality and performance of the application without being directly visible to end users.</div> 
                        <Link to="/Resume">
                        <button className='check-button'>CHECK</button>
                        </Link>
                    </div>
                    <div className='card-right'>department of computers and information technology</div>
                </div>

                <div className='box'>
                    <div className='card-left'>
                        <div className='card-title'>Frontend Programmer</div>
                        <div className='card-details'>Responsible for creating the visual and interactive elements of a software application or website that users directly interact with. They work on the user interface (UI), design, and client-side scripting to ensure a responsive and visually appealing user experience. Frontend programmers use HTML, CSS, JavaScript, and various frontend frameworks to build the presentation layer of web and mobile applications.</div> 
                        <Link to="/Resume">
                        <button className='check-button'>CHECK</button>
                        </Link>
                    </div>
                    <div className='card-right'>department of computers and information technology</div>
                </div>

            </div>

           

        </div>

        
        )
        
    }
}

export default HRJob;