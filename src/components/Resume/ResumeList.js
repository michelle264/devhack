import React from 'react';
import './ResumeList.css';
import img1 from './img1.png';
import Date from './Date.svg';
import Time from './Time.svg';


class ResumeList extends React.Component {
    render() {
      return (
        <div className='container'>

            <div className='searchbar'>
                <div className='section'></div>
                <div className='filter'>Advanced filters</div>
            </div>

            <div className='title'>Resume for Software Engineer</div>

            <div className='row'>

                <div className='card'>
                    <div className='image'>
                        <img src ={img1} alt='resume'></img>
                    </div>

                    <div className='details'>
                        <div className='name'>Olivia Wilson</div>

                        <div className='date'>
                            <div className='icon'>
                                <img src = {Date} alt ='icon'></img>
                            </div>
                            11 Nov 2023 (Wed)
                        </div>

                        <div className='time'>
                            <div className='icon'>
                            <img src = {Time} alt ='icon'></img>
                            </div>
                            11:00 am - 12:00 pm
                        </div>
                    </div>

                </div>  

                <div className='card'>
                    <div className='image'>
                        <img src ={img1} alt='resume'></img>
                    </div>

                    <div className='details'>
                        <div className='name'>Olivia Wilson</div>

                        <div className='date'>
                            <div className='icon'>
                                <img src = {Date} alt ='icon'></img>
                            </div>
                            11 Nov 2023 (Wed)
                        </div>

                        <div className='time'>
                            <div className='icon'>
                            <img src = {Time} alt ='icon'></img>
                            </div>
                            11:00 am - 12:00 pm
                        </div>
                    </div>

            
                </div>  

                <div className='card'>
                    <div className='image'>
                        <img src ={img1} alt='resume'></img>
                    </div>

                    <div className='details'>
                        <div className='name'>Olivia Wilson</div>

                        <div className='date'>
                            <div className='icon'>
                                <img src = {Date} alt ='icon'></img>
                            </div>
                            11 Nov 2023 (Wed)
                        </div>

                        <div className='time'>
                            <div className='icon'>
                            <img src = {Time} alt ='icon'></img>
                            </div>
                            11:00 am - 12:00 pm
                        </div>
                    </div>

            
                </div>  
            </div>


        </div>
      )
    }
}

export default ResumeList;

