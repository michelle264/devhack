import React from 'react';
import './ApplyModal.css'; // You can create a separate CSS file for modal styles
import Upload from './Upload.svg';

class ApplyModal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-title'>Let's upload your resume ~</div>
          <div className='modal-box'>
            <img src ={Upload} alt = 'Upload'/>
            Drop the file to upload or browse
            </div>
          <hr className='horizontal-line' />
          <div className='modal-details'>
            <div className='modal-section'>
                <div className='subtitle'>Your Name</div>
                <div className='subtitle-submission'>
                Jojo Lim Hui Rou
                </div>
            </div>

            <div className='modal-section'>
                <div className='subtitle'>Your Email</div>
                <div className='subtitle-submission'>
                jojolim@gmail.com
                </div>
            </div>
          </div>
          <button className='modal-button' onClick={this.props.onClose}>SUBMIT</button>
        </div>
      </div>
    );
  }
}

export default ApplyModal;
