import React from 'react';
import './ResumeList.css';
import img1 from './img1.png';
import DateIcon from './Date.svg';
import TimeIcon from './Time.svg';

class ResumeList extends React.Component {
    render() {
      const resumes = [
        { id: 1, name: 'Olivia Wilson', date: '11 Nov 2023 (Wed)', time: '11:00 am - 12:00 pm' },
        
        { id: 2, name: 'Olivia Wilson', date: '11 Nov 2023 (Wed)', time: '11:00 am - 12:00 pm' },
        { id: 3, name: 'Olivia Wilson', date: '11 Nov 2023 (Wed)', time: '11:00 am - 12:00 pm' },
        { id: 4, name: 'Olivia Wilson', date: '11 Nov 2023 (Wed)', time: '11:00 am - 12:00 pm' },
      ];
      const resumes2 = [
        { id: 1, name: 'Olivia Wilson', date: '11 Nov 2023 (Wed)', time: '11:00 am - 12:00 pm' },
        { id: 2, name: 'Olivia Wilson', date: '11 Nov 2023 (Wed)', time: '11:00 am - 12:00 pm' },
        { id: 3, name: 'Olivia Wilson', date: '11 Nov 2023 (Wed)', time: '11:00 am - 12:00 pm' },
        { id: 4, name: 'Olivia Wilson', date: '11 Nov 2023 (Wed)', time: '11:00 am - 12:00 pm' },
      ];

      const resumes3 = [
        { id: 1, name: 'Olivia Wilson', date: '11 Nov 2023 (Wed)', time: '11:00 am - 12:00 pm' },
        { id: 2, name: 'Olivia Wilson', date: '11 Nov 2023 (Wed)', time: '11:00 am - 12:00 pm' },
        { id: 3, name: 'Olivia Wilson', date: '11 Nov 2023 (Wed)', time: '11:00 am - 12:00 pm' },
        { id: 4, name: 'Olivia Wilson', date: '11 Nov 2023 (Wed)', time: '11:00 am - 12:00 pm' },
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
                    </div>
                </div>  
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
                    </div>
                </div>  
              ))}
            </div>
           
        </div>
      )
    }
}

export default ResumeList;
