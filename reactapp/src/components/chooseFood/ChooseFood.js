import React from 'react'
import pizza from '../../assets/images/pizza.jpg';
import ChooseFoodCard from './ChooseFoodCard';
import chooseFoodData from '../data/ChooseFoodData';
const Food = () => {
  return (
    <>
        {/* food quality container */}
        <div className="choose-food-container">
          <h3>Why Choose Us</h3>
          <div className="choose-food-image">
            <div className="left-food-image">
              <img className="food-image" src={pizza} alt="foodimage"/>
            </div>
            <div className="right-food-info">
               {chooseFoodData.map((value) =>{
                return <ChooseFoodCard icon={value.icon} title={value.title}  description={value.description}/>
               })}
            </div>

          </div>

        </div>
    </>
  )
}

export default Food
