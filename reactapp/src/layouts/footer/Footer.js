import React from "react";
import googlemap from "../../assets/images/googlemap.png";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../../assets/style/Footer.scss";
import { NavLink } from "react-router-dom";
const Footer = () => {

  const handleClick = () =>{
    const top = document.querySelector(".header-wrapper");
    top.scrollIntoView({behavior:"smooth"})

  }

  return (
    <>
      <footer className="footer-section">
        <div className="main-footer">
          <div className="footer-top">
            <div className="footer-title contact">
              <h5>Contact Us</h5>
              <div className="address footer">
                <div className="address-icon icon">
                  <span>
                    <FmdGoodIcon />
                  </span>
                </div>
                <div className="footer-details">
                  <p className="title">Address</p>
                  <p>TInkune, Kathmandu</p>
                </div>
              </div>

              <div className="email footer">
                <div className="email-icon icon">
                  <span>
                    <MailIcon />
                  </span>
                </div>
                <div className="footer-details">
                  <p className="title">Address</p>
                  <p>TInkune, Kathmandu</p>
                </div>
              </div>

              <div className="phone footer">
                <div className="phone-icon icon">
                  <span>
                    <PhoneIcon />
                  </span>
                </div>
                <div className="footer-details">
                  <p className="title">Address</p>
                  <p>TInkune, Kathmandu</p>
                </div>
              </div>
            </div>

            <div className="footer-title quicklinks">
              <h5>Quick Links</h5>
              <div className="quicklinks-details">
                <ul>
                  <li>
                  <NavLink to="/" onClick={handleClick}>Home</NavLink>
                  </li>
                  <li>
                  <NavLink to="/about" onClick={handleClick}>About</NavLink>
                  </li>
                  <li>
                  <NavLink to="/menu" onClick={handleClick}>Menu</NavLink>
                  </li>
                  <li>
                  <NavLink to="/events" onClick={handleClick}>Events</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="google-map">
              <img src={googlemap} alt="map" />
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              <p>@copyright 2022. All Rights Reserve</p>
            </div>
            <div className="sociallinks">
              <span>
                <FacebookIcon />
              </span>
              <span>
                <InstagramIcon />
              </span>
              <span>
                <TwitterIcon />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
