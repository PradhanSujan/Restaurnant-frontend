import React from 'react'
import '../../assets/style/Achievement.scss';


import { SiCodechef } from "react-icons/si";
import { MdOutlineFastfood } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";


const Achievement = () => {


  return (
    <div className='achievement-section'>
        <h3>Our Achievements</h3>
        <div className='achievement-container'>

            <div className='achievements'>
                <span className='icon'><SiCodechef/></span>
                <span className='achievements-title'>Professionals chef</span>
                <span className='achievements-num'>420</span>
            </div>

            <div className='achievements'>
                <span className='icon'><MdOutlineFastfood/></span>
                <span className='achievements-title'>Food Item</span>
                <span className='achievements-num'>420</span>
            </div>

            <div className='achievements'>
                <span className='icon'><MdRestaurantMenu/></span>
                <span className='achievements-title'>Years of Experience</span>
                <span className='achievements-num'>420</span>
            </div>

        </div>
      
    </div>
  )
}

export default Achievement;
