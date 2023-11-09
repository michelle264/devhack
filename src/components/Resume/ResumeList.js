import React from 'react';
import './ResumeList.css';
import img1 from './img1.png';
import Alice from './Alice.png';
import Bob from './Bob.png';
import jane from './jane.png';
import DateIcon from './Date.svg';
import TimeIcon from './Time.svg';
import { Link } from 'react-router-dom';

class ResumeList extends React.Component {
    render() {
      const resumes = [
        { id: 1, name: 'Jojo Lim Hui Rou', date: '12 Nov 2023 (Sat)', time: '10:00 am - 11:00 am', marker: '93%' },
        { id: 2, name: 'Jane Smith', date: '13 Nov 2023 (Sun)', time: '02:00 pm - 03:00 pm', marker: '90%' },
        { id: 3, name: 'Alice Johnson', date: '14 Nov 2023 (Mon)', time: '09:30 am - 10:30 am', marker: '85%' },
        { id: 4, name: 'Bob Williams', date: '15 Nov 2023 (Tue)', time: '03:30 pm - 04:30 pm', marker: '83%' },
      ];
      
      const resumes2 = [
        { id: 1, name: 'Eva Brown', date: '16 Nov 2023 (Wed)', time: '01:00 pm - 02:00 pm', marker: '82%' },
        { id: 2, name: 'David Davis', date: '17 Nov 2023 (Thu)', time: '10:30 am - 11:30 am', marker: '82%' },
        { id: 3, name: 'Sophia Lee', date: '18 Nov 2023 (Fri)', time: '11:45 am - 12:45 pm', marker: '80%' },
        { id: 4, name: 'James White', date: '19 Nov 2023 (Sat)', time: '02:30 pm - 03:30 pm', marker: '79%' },
      ];
      
      const resumes3 = [
        { id: 1, name: 'Grace Wilson', date: '20 Nov 2023 (Sun)', time: '04:00 pm - 05:00 pm', marker: '78%' },
        { id: 2, name: 'Oliver Johnson', date: '21 Nov 2023 (Mon)', time: '08:45 am - 09:45 am', marker: '976%' },
        { id: 3, name: 'Lily Smith', date: '22 Nov 2023 (Tue)', time: '02:15 pm - 03:15 pm', marker: '75%' },
        { id: 4, name: 'Henry Davis', date: '23 Nov 2023 (Wed)', time: '03:00 pm - 04:00 pm' , marker: '75%'},
      ];
      

      return (
        <div className='container'>

            <div className='searchbar'>
                <div className='keywordBar'>
                    <div className='section'>Keywords/job title</div>
                    <div className='section'>Date</div>
                    <div className='section'>Time</div>
                </div>
                
                <div className='filter'>Advanced filters</div>
            </div>

            <div className='title'>Resume for Software Engineer</div>

            <div className='row'>
              {/* Map through the resumes array to create a card for each resume */}
              {resumes.map(resume => (
                  <Link to="/REvaluation" key={resume.id} className='card'>
                    <div className='image'>
                      {resume.id === 1 ? (
                        <img src={img1} alt='resume'></img>
                      ) : resume.id === 2 ? (
                        <img src={jane} alt='resume'></img>
                      ) : resume.id === 3 ? (
                        <img src={Alice} alt='resume'></img>
                      ) : resume.id === 4 ? (
                        <img src={Bob} alt='resume'></img>
                      ) : null}
                    </div>
                    <div className='details'>
                        <div className='card-name'>{resume.name}</div>

                        <div className='date'>
                            <div className='icon'>
                                <img src={DateIcon} alt='Date icon'></img>
                            </div>
                            {resume.date}
                        </div>

                        <div className='time'>
                            <div className='icon'>
                            <img src={TimeIcon} alt='Time icon'></img>
                            </div>
                            {resume.time}
                        </div>
                        <div className='marker'>{resume.marker}</div>
                    </div>
                </Link>  
              ))}
            </div>

            <div className='row'>
              {/* Map through the resumes array to create a card for each resume */}
              {resumes2.map(resume => (
                <div key={resume.id} className='card'>
                    <div className='image'>
                        <img src={img1} alt='resume'></img>
                    </div>
                    <div className='details'>
                        <div className='card-name'>{resume.name}</div>

                        <div className='date'>
                            <div className='icon'>
                                <img src={DateIcon} alt='Date icon'></img>
                            </div>
                            {resume.date}
                        </div>

                        <div className='time'>
                            <div className='icon'>
                            <img src={TimeIcon} alt='Time icon'></img>
                            </div>
                            {resume.time}
                        </div>
                        <div className='marker'>{resume.marker}</div>
                    </div>
                </div>  
              ))}
            </div>

            <div className='row'>
              {/* Map through the resumes array to create a card for each resume */}
              {resumes3.map(resume => (
                <div key={resume.id} className='card'>
                    <div className='image'>
                        <img src={img1} alt='resume'></img>
                    </div>
                    <div className='details'>
                        <div className='card-name'>{resume.name}</div>

                        <div className='date'>
                            <div className='icon'>
                                <img src={DateIcon} alt='Date icon'></img>
                            </div>
                            {resume.date}
                        </div>

                        <div className='time'>
                            <div className='icon'>
                            <img src={TimeIcon} alt='Time icon'></img>
                            </div>
                            {resume.time}
                        </div>
                        <div className='marker'>{resume.marker}</div>
                    </div>
                </div>  
              ))}
            </div>
           
        </div>
      )
    }
}

export default ResumeList;
