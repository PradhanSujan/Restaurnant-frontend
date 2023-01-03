import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./GoToTop.scss";
const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHidden = 250;
    // scrollTop le top bata kati scroll garyo bhanera dekhauchha
    // The Element.scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically.

    // const scroll = document.body.scrollTop;

    // Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).

    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(windowScroll);

    if (windowScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      // display karwana hai or nai yo state management ma aauchha
      setIsVisible(false);
    }
  };
  // herek bar dekhna ko lagi

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    // jis position rahera baki clear garnako lagi
    //kinai bar bar scrol garda website ko load hunxa so

    //useEffect ek hi chij return garna sakchha

    // jaba jaba pani hami scroll garchhau tyo event listen garchha
    //the moment hami rokiyau bhane usko delete gardinchha jasle garda applicaiton ma load aaudaina

    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const goToBtn = () => {
    // scrollTo() method scrolls the document to specified coordinated
    window.scrollTo({ top: 0, left: 0, behaviour: "smooth" });
    // alert("hello");
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
