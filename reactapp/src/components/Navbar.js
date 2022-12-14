
import React from "react";
import { NavLink } from "react-router-dom";
// import headerImg from '../../assets/images/headerImg.jpg';
// import logo from '../../assets/brand/logo.png';
import logo from '../assets/brand/logo.png';
import NavbarData from "./NavbarData";

const Navbar = () => {
  return (
    <>
      <header className="header-wrapper">
        <div className="main-header">
          <div className="header-logo-title">
            <div className="header-logo">
                <img src={logo} alt="headerlogo" className="logo"/>
            </div>
            <div className="header-title">
                <p>Resturant.</p>
            </div>
            </div>

            <div className="header-navbar">
              <ul className="header-navbar-list">
              {NavbarData.map((nav,i) => {
                return (
                  <li key={i} className="list-item">
                    <NavLink className="active" to={nav.path} >{nav.title}</NavLink>
                  </li>
                );
              })}

              </ul>
              </div>

            <div>

            </div>


        </div>

      </header>
    </>
  );
};
export default Navbar;
