
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Hero = () => {
  return (
    <>
        <div className='hero-section'>
            <div className='hero-container'>
                <div className="hero-image">
                <span className='left-arrow btn'><ArrowBackIosIcon/></span>
                <div className='hero-content'>
                <h1>Stay Healthy & <span>Choose Your Taste</span></h1>
                <p>This is the best resturant your visted first. You never get borded and ignored.</p>
                </div>

                <span className='right-arrow btn'><ArrowForwardIosIcon/></span>
                </div>          

            </div>

        </div>
    </>
  )
}

export default Hero
