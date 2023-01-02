import React from "react";
import "./styles.css"

const Login = () => {
  return (
    <>
      <div className="login-section">
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-form">
          <h4>Email</h4>
          <div className="email-input">
            <i className="fa fa-envelope"></i>
            <input type="email" placeholder="Type your email" />
          </div>
          <h4>Password</h4>
          <div className="password-input">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Type your password" />
          </div>
          <p>
            <a href="#!">Forgot password?</a>
          </p>
        
        <button className="login-btn">LOGIN</button>
        <div className="alternative-signup">
          <p>
            Not a member?{" "}
            <span>
              <a href="/sign-up">Sign-up</a>
            </span>
          </p>
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
