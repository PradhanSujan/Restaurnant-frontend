import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../../assets/style/Header.scss";

import Navbar from "./Navbar";
import logo from "../../assets/brand/logo.png";
// import { FaBars } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);
  // when click value alaways be negative
  //means positive huda negative and negative huda positive
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
              {Navbar.map((nav, i) => {
                return (
                  <li key={i} className="list-item">
                    <NavLink
                      className="active"
                      to={nav.path}
                      onClick={closeMobileMenu}
                    >
                      {nav.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div></div>
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
