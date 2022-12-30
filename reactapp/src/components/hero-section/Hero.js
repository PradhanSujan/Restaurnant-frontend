import React from "react";
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import heroData from './heroData';

import "../../assets/style/Hero.scss";
import hero from "../../assets/images/hero.png";
import burger from "../../assets/images/burger.jpg";
import pizza from "../../assets/images/pizza.jpg";

const Hero = () => {
  // const [currSlide, setCurrentSlide] = useState(0);
  // const maxSlide = heroData.length;
  // console.log(maxSlide);

  // const prevSlide =() =>{
  //   // current === 0 ? setCurrent (hData - 1);
  //   // const data = current === hData - 1 ? 0 : current + 1;
  //   // console.log(data);

  // }

  // const nextSlide = () =>{
  //   setCurrentSlide(currSlide === maxSlide - 1 ? 0 : currSlide + 1);
  //   console.log(currSlide);

  // }

  // const prevSlide = () =>{
  //   setCurrentSlide(currSlide === 0 ? maxSlide -1 : currSlide -1)
  //   console.log(currSlide);
  // }

  // useEffect(() =>{

  // },[])

  // useEffect(() => {
  //   const interval = setInterval(()=>{
  //     setCurrentSlide(currSlide === maxSlide - 1 ? 0 : currSlide + 1)
  //   }, 3000);
  //   return()=> clearInterval(interval);

  // }, [currSlide])

  return (
    <>
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            {/* {heroData.map((val,index)=>{

                      return (
                      <div key={index} className={index === currSlide? "active" :"inactive"}>
                      <img src={val.image} alt="img" />
                      </div>
                      )
                })} */}
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

            {/* <span className='right-arrow btn'><ArrowForwardIosIcon onClick={nextSlide}/></span> */}
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
