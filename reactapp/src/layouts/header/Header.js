import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
// import headerImg from '../../assets/images/headerImg.jpg';
import logo from '../../assets/brand/logo.png';

export const Header = () => {
  return (
    <>
      <div className="header-wrapper">
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
              {Navbar.map((nav,i) => {
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

      </div>
    </>
  );
};
export default Header;
