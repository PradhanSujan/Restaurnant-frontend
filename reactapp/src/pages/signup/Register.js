import React from "react";
import "./styles.css";

const Register = () => {
  return (
    <>

        <div className="bgImg"></div>
        <div className="content">
          <div className="d-flex h-100 align-items-center justify-content-center">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-6 ml-auto mr-auto">
                  <div className="card">
                    <div className="card-body">
                      <form>
                        <div className="glowBox">
                          <h4 className="title">Sign Up</h4>
                          <div className="socialMedia">
                            <a href="#" className="btn btn-just-icon btn-link">
                              <i className="fab fa-facebook-square"></i>
                            </a>
                            <a href="#" className="btn btn-just-icon btn-link">
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="btn btn-just-icon btn-link">
                              <i className="fab fa-google-plus"></i>
                            </a>
                          </div>
                        </div>
                      </form>
                      <div className="desc text-center">
                        <p>Sign up now to use our services!</p>
                      </div>
                      <div className="signUp">
                        <span>
                          <input
                            type="text"
                            className="form"
                            placeholder="Name"
                            autocomplete="off"
                            style="cursor: auto"
                          />
                          <span className="underline"></span>
                        </span>
                        <span>
                          <input
                            type="text"
                            className="form"
                            placeholder="Email"
                            autocomplete="off"
                            style="cursor: auto"
                          />
                          <span className="underline"></span>
                        </span>
                        <span>
                          <input
                            type="password"
                            className="form"
                            placeholder="Password"
                            autocomplete="off"
                            style="cursor: auto"
                          />
                          <span className="underline"></span>
                        </span>
                        <span>
                          <input
                            type="password"
                            className="form"
                            placeholder="Confirm Password"
                            autocomplete="off"
                            style="cursor: auto"
                          />
                          <span className="underline"></span>
                        </span>
                      </div>
                      <div className="text-center">
                        <a
                          href="#"
                          className="btn btn-primary btn-link btn-wd btn-lg"
                        >
                          Sign Up
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Register;
