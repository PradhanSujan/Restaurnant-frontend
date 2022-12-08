import React from "react";
import pizza from '../../assets/images/pizza.jpg';
import chicken from '../../assets/images/chicken.jpg'
import thakali from '../../assets/images/thakali.jpg'
import burger from '../../assets/images/burger.jpg'
import aboutimg from '../../assets/images/aboutimg.jpg';


import MealCard from "../../components/MealCard";

const Main = () => {
  return (
    <>
      <main className="main-wrapper">
        <div className="main-container">

        <div className="meal-content">
        <div className="meal-title">
          <h2>See Our Meal Plan</h2>
        </div>

        <div className="meal-card-container">
            <MealCard imgSrc={pizza}  title="Pizza" para="piza is best" btnLink="#"/>
            <MealCard imgSrc={chicken}  title="Chicken Roast" para="chieck is best" btnLink=""/>
            <MealCard imgSrc={thakali}  title="Thakali" para="Thakali is" btnLink=""/>
            <MealCard imgSrc={burger}  title="Burger" para="Chiecken is best" btnLink=""/>
        </div>

    
        </div>
        
        <div className="article-about">
            <div className="about-left-content">
              <img className="about-img" src={aboutimg} alt="about img"/>
            </div>
            <div className="about-right-content">
              <h2>About Us</h2>
              <p>The About Us page of your website is an essential source of information for
               all who want to know more about your business.
                About Us pages are where you showcase your history,
                 what is unique about your work, your company’s values, and who you serve.
                </p>
            </div>
          </div>

          </div>
      </main>
    </>
  );
};

export default Main;
