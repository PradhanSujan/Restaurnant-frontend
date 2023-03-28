import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import "../../assets/style/Header.scss";

import Navbar from "./Navbar";
import logo from "../../assets/brand/logo.png";
import { UserContext } from "../../App";
// import { FaBars } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);
  const { state, dispatch } = useContext(UserContext);

  // when click value alaways be negative
  //means positive huda negative and negative huda positive
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const jwtToken = localStorage.getItem("jwt");
  const RenderMenu = () => {
    return state || jwtToken ? (
      <>
        <li className="list-item">
          <NavLink className="active" to="/">
            Home
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="active" to="/about">
            About
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="active" to="/menu">
            Menu
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="active" to="/events">
            Events
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="active" to="/contact">
            Contact
          </NavLink>
        </li>

        <li className="list-item">
          <NavLink className="active" to="/logout">
            Logout
          </NavLink>
        </li>
      </>
    ) : (
      <>
        <li className="list-item">
          <NavLink className="active" to="/">
            Home
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="active" to="/about">
            About
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="active" to="/menu">
            Menu
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="active" to="/events">
            Events
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="active" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="active" to="/login">
            Login
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="active" to="/sign-up">
            Signup
          </NavLink>
        </li>
      </>
    );
  };

  return (
    <>
      <header className="header-wrapper">
        <div className="main-header">
          <div className="header-logo">
            <img src={logo} alt="headerlogo" className="logo" />
            <p>Food Hunt</p>
          </div>

          <div className="header-navbar">
            <ul className={click ? "navbar mobile-navbar-active" : "navbar"}>
              <RenderMenu />
              {/* {Navbar.map((nav, i) => { */}

              {/* <li key={i} className="list-item">
                    <NavLink
                      className="active"
                      to={nav.path}
                      onClick={closeMobileMenu}
                    >
                      {nav.title}
                    </NavLink>
                  </li> */}
              {/* return ( */}

              {/*                   
                );
              })} */}
            </ul>
          </div>
        </div>
        {/* menu bar */}
        <div id="mobile" onClick={handleClick}>
          <i
            className={
              click ? "fa-regular fa-circle-xmark" : "fa-solid fa-bars"
            }
          ></i>
        </div>
      </header>
    </>
  );
};
export default Header;
