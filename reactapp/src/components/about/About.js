import React from "react";
import "../../assets/style/About.scss";

import about from "../../assets/images/about.png";
const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="about-container">
          <div className="about-left">
            <div className="about-content">
              <div className="about-title">
                <p>About Us</p>
                <h3>We create the best</h3>
              </div>
              <p>
                The inception of You come First Restaurant can be attributed to
                the lack of quality eateries in Nepal. As a restaurant, we have
                struggled to come to terms with the standards the Nepali
                consumer is accepting on a daily basis. The inception of You
                Come First Restaurant can be attributed to the lack... The
                inception of You come First Restaurant can be attributed to the
                lack of quality eateries in Nepal. As a restaurant, we have
                struggled to come to terms with the standards the Nepali
                consumer is accepting on a daily basis. The inception of You
                Come First Restaurant can be attributed to the lack
              </p>
            </div>
          </div>
          
          <div className="about-right">
            <img src={about} alt="rightImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
