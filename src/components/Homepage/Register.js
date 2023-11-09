import React from 'react';
import './Register.css'; 
import { Link } from 'react-router-dom';

class RegisterPage extends React.Component {
  state = {
    selectedRole: null,
  };

  handleRoleSelection = (role) => {
    this.setState({ selectedRole: role });
  };
    render() {
      return (
        <div className="register-page">
          <div className="register-container">
            <div className="register-header">
              <h1>Register</h1>
            </div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="text-input" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="text-input" />
            </div>
            <div className="form-group">
        <label>Role</label>
        <div className="role-selection">
          <button
            className={`role-button ${this.state.selectedRole === 'hr' ? 'selected' : ''}`}
            onClick={() => this.handleRoleSelection('hr')}
          >
            HR
         </button>
         <button
           className={`role-button ${this.state.selectedRole === 'jobSeeker' ? 'selected' : ''}`}
            onClick={() => this.handleRoleSelection('jobSeeker')}
         >
           Job Seeker
          </button>
        </div>
      </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="text-input" />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="text-input" />
            </div>
            <button className="register-button2">Register as Job Seeker</button>
            <button className="register-button2">Register as HR</button>
            <div className="login-text2">Or Login using</div>
            <div className="login-button2">
            <Link to="/login">
                <button className="login-link2">Login</button>
                </Link>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default RegisterPage;