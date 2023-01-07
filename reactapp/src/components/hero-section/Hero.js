import React from "react";
import "../../assets/style/Hero.scss";
import hero from "../../assets/images/hero.png";
import burger from "../../assets/images/burger.jpg";
import pizza from "../../assets/images/pizza.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-content">
              <h2>Stay Healthy & Choose Your Taste</h2>
              <p>
                This is the best resturant your visted first. You never get
                borded and ignored.
              </p>
              <div className="btn-group">
                <button className="btn-started">Get Started</button>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <img className="hero-img img1" src={pizza} alt="img" />
            <img className="hero-img img2" src={burger} alt="img" />
            <img className="hero-img img3" src={hero} alt="img" />
            <div className="hero-img-circle">
              <img src={hero} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
