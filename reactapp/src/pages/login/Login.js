import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../../assets/style/Login.scss";
import Logout from "../logout/Logout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultLogin = {
  email: "",
  password: "",
  redirectRole: false,
};
const Login = () => {
  const [user, setUser] = useState(defaultLogin);
  const { email, password, redirectRole } = user;
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!email || !password) {
        console.log("pleased enter the email and password");
      } else {
        const res = await fetch("/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Convert a JavaScript object into a string with JSON.stringify().
          body: JSON.stringify({
            email,
            password,
          }),
        });

        if (!res.ok) {
          if (res.status === 400 || res.status === 422) {
            const data = await res.json();
            toast.error(`${data.error}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        } else {
          const data = await res.json();
          localStorage.setItem("jwt", JSON.stringify(data.signInToken));
          setisLoggedIn(true);
          toast.success("login Success", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          resetLoginForm();

          // navigate('/');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const resetLoginForm = () => {
    setUser(defaultLogin);
  };


  const handleForgotPassword = async (event) =>{
    console.log(email);
    event.preventDefault();
try{
   const res =  await fetch('/forgetpassword', {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          email,
        })

    })

    const data = await res.json();
    console.log(data);
  }catch(error){
    console.log(error);
  }
    


    
  }

  return (
    <>
      <div className="login-section">
        <div className="login-container">
          <h1>Login</h1>
          <div className="login-form">
            <h4>Email</h4>
            <div className="email-input">
              <i className="fa fa-envelope"></i>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleLogin}
                placeholder="Type your email"
              />
            </div>
            <h4>Password</h4>
            <div className="password-input">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleLogin}
                placeholder="Type your password"
              />
            </div>
            <p>
              <button onClick={handleForgotPassword}>Forgot password?</button>
            </p>
            {isLoggedIn ? (
              <button className="login-btn" onClick={formSubmit}>
                logout
              </button>
            ) : (
              <button className="login-btn" onClick={formSubmit}>
                LOGIN
              </button>
            )}

            <div className="alternative-signup">
              <p>
                Not a member?{" "}
                <span className="signup-btn">
                  <NavLink to="/sign-up">Sign-up</NavLink>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
