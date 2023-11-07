import React from 'react';
import './Register.css'; 

class RegisterPage extends React.Component {
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
              <label>Password</label>
              <input type="password" className="text-input" />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="text-input" />
            </div>
            <button className="register-button">Register</button>
            <div className="login-text">Or Login using</div>
            <div className="login-button">
                <button className="login-link">Login</button>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default RegisterPage;