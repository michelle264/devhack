import React from 'react';
import './REvaluation.css';
import Grab from './Grab.png';
import Huawei from './Huawei.png';
import Intel from './Intel.png';
import Dell from './Dell.png';


class REvaluation extends React.Component{
    render(){
        return(
            <div className='container1'>

                <div className='heading'>
                    <div className='heading-left'>
                        <img src={Grab} alt="Grab"/>
                    </div>
                    <div className='heading-right'>
                        <div className='heading-JobTitle'>Jojo Lim Hui Rou</div>

                    </div>
                </div>

                <div className='body'>
                    <div className='body-left'>
                        <div className='box1'>
                            <div className='box1-title'>Age</div>
                            <div className='box1-description'>26</div>
                        </div>
                        <div className='box1'>
                            <div className='box1-title'>Email Address</div>
                            <div className='box1-description'>
                            jojolim@gmail.com
                            </div>
                        </div>
                        <div className='box1'>
                            <div className='box1-title'>Education</div>
                            <div className='box1-description'>
                            Universiti Malaya<br />
                            Bachelor of Computer Science (Artificial Intelligence)<br />
                            Master of Software Engineering<br />
                            </div>
                        </div>
                        <div className='box1'>
                            <div className='box1-title'>Expertise</div>
                            <div className='box1-description'>
                            UI / UX <br />
                            Java <br />
                            Python<br />
                            HTML, CSS and JavaScript<br />
                            React, Vue<br />
                            Android Studio<br />
                            React Native<br />
                            </div>
                        </div>
                        <div className='box1'>
                            <div className='box1-title'>Language</div>
                            <div className='box1-description'>
                            English<br />
                            Malay<br />
                            Chinese<br />
                            Cantonese<br />
                            Japanese (Basis)<br />
                            </div>
                        </div>

                        <div className='box1'>
                            <div className='box1-title'>Working Experience</div>
                            <div className='box1-description'>
                                2023-3 - 2023-9    |    Touch N Go Sdn Bhd<br />
                                <span className='bold-text'>Software Engineering Intern</span><br />
                                Worked on E Wallet Team<br />
                                Used Java and Python to write interfaces to track file backups<br />
                                Facilitated collaboration between teams with Github best practices<br />
                                <br />
                                2022-6 - 2023-12    |    Huawei Malaysia Sdn Bhd<br />
                                <span className='bold-text'>Web Developer Intern</span><br />
                                Worked on Website Team<br />
                                Used HTML, CSS and JavaScript to create the website<br />
                                Assisted with project tp improve communication between developers and operations. Helped stakeholder prep for daily scrum<br />
                            </div>
                        </div>
                    </div>
                    <div className='body-right'>
                        <div className='body-right-line1'>You may like these COMPANIES</div>
                        <hr className='horizontal-line' />
                        <div className='content'>
                            <div className='content-img'>
                                <img src={Huawei} alt="Huawei"/>
                            </div>
                            <div className='content-title'>Huawei Technologies (Malaysia) Sdn. Bhd.</div>
                        </div>
                        <div className='content'>
                            <div className='content-img'>
                                <img src={Intel} alt="Intel"/>
                            </div>
                            <div className='content-title'>Intel Corporation</div>
                        </div>
                        <div className='content'>
                            <div className='content-img'>
                                <img src={Dell} alt="Dell"/>
                            </div>
                            <div className='content-title'>Dell Technologies Inc. (DELL)</div>
                        </div>
                        <hr className='horizontal-line' />
                        <div className='body-right-line2'>See all recomendations</div>
                    </div> 
                    

                </div>

               
            </div>

        )
        
    }
}

export default REvaluation;