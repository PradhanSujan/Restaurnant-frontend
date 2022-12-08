import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import headerImg from '../../assets/images/headerImg.jpg';

export const Header = () => {
  return (
    <>
      <header className="header-wraper">
        <nav className="navbar">
          <div className="main-nav">
            <NavLink to="/" className="logo" >
              Resturant.
            </NavLink>

            <ul className="nav-list">
              {Navbar.map((nav,i) => {
                return (
                  <li key={i} className="list-item">
                    <NavLink to={nav.path}>{nav.title}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        <div className="header-data-info">
          <div className="left-data-info">
            <h1>Stay Healthy and Choose your taste</h1>
            <p>lorem this is best websiey</p>

            <button className="btn header-btn">Order Now</button>
          </div>
          <div className="right-data-info">
            <img className="header-img" src={headerImg} alt="img" />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
