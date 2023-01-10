import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./GoToTop.scss";
const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (windowScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const goToBtn = () => {
    // scrollTo() method scrolls the document to specified coordinated
    window.scrollTo({ top: 0, left: 0, behaviour: "smooth" });
  };
  return (
    <>
      {isVisible && (
        <div className="go-top">
          <button className="top-btn" onClick={goToBtn}>
            <FaArrowUp className="top-btn-icon" />
          </button>
        </div>
      )}
    </>
  );
};

export default GoToTop;
