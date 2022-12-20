
import React, {useState, useEffect} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import heroData from './heroData';

const Hero = () => {

const [currSlide, setCurrentSlide] = useState(0);
const maxSlide = heroData.length;
console.log(maxSlide);

// const prevSlide =() =>{
//   // current === 0 ? setCurrent (hData - 1);
//   // const data = current === hData - 1 ? 0 : current + 1;
//   // console.log(data);
  
// }

const nextSlide = () =>{
  setCurrentSlide(currSlide === maxSlide - 1 ? 0 : currSlide + 1);
  console.log(currSlide);

}


const prevSlide = () =>{
  setCurrentSlide(currSlide === 0 ? maxSlide -1 : currSlide -1)
  console.log(currSlide);
}


// useEffect(() =>{
  
// },[])

useEffect(() => {
  const interval = setInterval(()=>{
    setCurrentSlide(currSlide === maxSlide - 1 ? 0 : currSlide + 1)
  }, 3000);
  return()=> clearInterval(interval);


}, [currSlide])


  return (
    <>
        <div className='hero-section'>
            <div className='hero-container'>
                <div className="hero-image-section">
                {/* {heroData.map((val,index)=>{

                      return (
                      <div key={index} className={index === currSlide? "active" :"inactive"}>
                      <img src={val.image} alt="img" />
                      </div>
                      )
                })} */}
                <span className='left-arrow btn'><ArrowBackIosIcon onClick={prevSlide}/></span>
                <div className='hero-content'>
                <h2>Stay Healthy & <br/><span>Choose Your Taste</span></h2>
                <p>This is the best resturant your visted first. You never get borded and ignored.</p>
                <div className='btn-group'>
                    <button className='btn-started'>Get Started</button>
                </div>
                </div>

                <span className='right-arrow btn'><ArrowForwardIosIcon onClick={nextSlide}/></span>
                </div>          

            </div>

        </div>
    </>
  )
}

export default Hero
