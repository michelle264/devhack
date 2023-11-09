import React from 'react';
import './JobDetails.css';
import Grab from './Grab.png';
import Huawei from './Huawei.png';
import Intel from './Intel.png';
import Dell from './Dell.png';
import ApplyModal from './ApplyModal';




class JobDetails extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          isModalOpen: false,
        };
      }
    
      openModal = () => {
        this.setState({ isModalOpen: true });
      };
    
      closeModal = () => {
        this.setState({ isModalOpen: false });
      };

    render(){
        return(
            <div className='container1'>

                <div className='heading'>
                    <div className='heading-left'>
                        <img src={Grab} alt="Grab"/>
                    </div>
                    <div className='heading-right'>
                        <div className='heading-JobTitle'>Software Developer</div>
                        <div className='heading-Company'>Grab Malaysia</div>
                    </div>
                </div>

                <div className='body'>
                    <div className='body-left'>
                        <div className='box1'>
                            <div className='box1-title'>Job Summary</div>
                            <div className='box1-description'>We are looking for Malaysian candidates to join our growing family in developing quality software solutions.</div>
                        </div>
                        <div className='box1'>
                            <div className='box1-title'>Responsibilities</div>
                            <div className='box1-description'>
                                Develop and maintain software solutions based on product's specifications. <br />
                                Develop and maintain CI/CD framework to simplify the delivery of software solutions.<br />
                                Diagnosing and troubleshooting problem areas.<br />
                                Follows SCRUM/Agile software development methodologies.<br />
                                Apply best-practice in software development be it technical or non-technical.<br />
                            </div>
                        </div>
                        <div className='box1'>
                            <div className='box1-title'>Required Skills</div>
                            <div className='box1-description'>
                                Proficient in Java.<br />
                                Knowledge in Java frameworks: Spring, Hibernate.<br />
                                Knowledge in Web Technologies: HTML5, CSS3, JQuery, Angular.<br />
                                Proficient in SQL.<br />
                                Minimum 1 year working experience.<br />
                                Fresh graduates are welcome to apply.<br />
                            </div>
                        </div>
                        <div className='box1'>
                            <div className='box1-title'>Desired Skills</div>
                            <div className='box1-description'>
                                Web development experience.<br />
                                Knowledge in build automation tool: Maven.<br />
                                Knowledge in version control tool: Mercurial/Git/SVN.<br />
                                Knowledge in big data technologies: Elasticsearch/Lucene.<br />
                                Experience in scripting languages: Bash/Shell/Python.<br />
                                Knowledge in networking.<br />
                                Knowledge in virtualization/container system: VMWare/VirtualBox/Docker.<br />
                                Knowledge in penetration testing tools: Kali Linux.<br />
                            </div>
                        </div>
                        <div className='box1'>
                            <div className='box1-title'>Other Information</div>
                            <div className='box1-description'>
                                Working hours: Monday to Friday 10am to 6pm.<br />
                                Office location: Petaling Jaya (within walking distance from Asia Jaya LRT)<br />
                                Current working arrangement: work from home.<br />
                                Contractual bonus: 1 month<br />
                                Working attire: casual<br />
                                Insurance: term life & critical illness protection coverage.<br />
                                Medical benefits: comprehensive coverage includes spouse and children.<br />
                                Medical check-up.<br />
                                Fringe benefits: optical, dental, air fare.<br />
                                Parking: fully claimable.<br />
                            </div>
                        </div>
                        <div className='apply'>Are you interested? Let's apply now! </div>
                        <button className='apply-button' onClick={this.openModal}>APPLY</button>
                        {/* <ApplyModal show={this.state.isModalOpen} onClose={this.closeModal} /> */}

                    
                        
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
                <ApplyModal show={this.state.isModalOpen} onClose={this.closeModal}/>

            </div>

        )
        
    }
}

export default JobDetails;