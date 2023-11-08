import React from 'react';
import './LoginReal.css'; 

class LoginRealPage extends React.Component {
    render() {
      return (
        <div className="login-page">
          <div className="login-container">
            <div className="login-header">
              <h1>Login</h1>
            </div>
            <div className="form-group">
              <label>Username/Email</label>
              <input type="text" className="text-input" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="text-input" />
            </div>
            <div className="forgot-password">
            <button className="forgot-password-button">Forgot Password</button>
            </div>
            <button className="login-button">Login</button>
            <div className="register-text">Or Register using</div>
            <div className="register-button">
                <button className="register-link">Register</button>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default LoginRealPage;