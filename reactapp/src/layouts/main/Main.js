import React from "react";
import inside from '../../assets/images/restaurantInside.jpg'
import pizza from '../../assets/images/pizza.jpg';
import chicken from '../../assets/images/chicken.jpg';
import thakali from '../../assets/images/thakali.jpg';
import burger from '../../assets/images/burger.jpg';
import headerImg from '../../assets/images/headerImg.jpg';
import about from '../../assets/images/about.jpg';
// import Button from '@mui/material/Button';
import MenuCard from "../../components/MenuCard";
// import Box from '@mui/material/Box';




// import MealCard from "../../components/MealCard";
// import FoodItem from "../../components/FoodItem";

const Main = () => {
  return (
    <>
    <div className="main-wrapper">
      <div className="main-container">
          <div className="top-container-img">
          <div className="top-img-title">
          <h1>Stay Healthy & Choose Your Taste</h1>
          <p>This is the best resturant your visted first. You never get borded and ignored.</p>
            <button className="top-img-btn">Sign up</button>
          </div>
            
          </div>

          <div className="about-section">
            <div className="about-content">

              <div className="about-left-section">
                  <div className="left-content">
                   <h3> About Us</h3>
                   <p>The inception of You come First Restaurant can be attributed to the lack of quality eateries in Nepal. As a restaurant, 
                   we have struggled to come to terms with the standards the Nepali consumer is accepting on a daily basis. The inception of
                    You Come First Restaurant can be attributed to the lack...
                    The inception of You come First Restaurant can be attributed to the lack of quality eateries in Nepal. 
                    As a restaurant, we have struggled to
                    come to terms with the standards the Nepali consumer is accepting on a daily basis. The inception of You Come First Restaurant 
                    can be attributed to the lack</p>
       
                  </div>
               
              </div>
              

              <div className="about-right-content">
                  <img className="right-content-image" src={about} alt="rightImg"/>
              </div>
            </div>

          </div>

{/*............................. menu .......................*/}
          <div className="menu-container">
            <div className="main-menu">
            <div className="menu-para">
            <p>“Food is not just eating energy. It's an experience." Our Special Menu</p>
            <h4>Our Special Menu</h4>
            </div>
              <div className="menu-section">
            <MenuCard imgSrc={pizza}  title="Pizza" para="piza is best"/>
            <MenuCard imgSrc={chicken}  title="Chicken Roast" para="chieck is best"/>
            <MenuCard imgSrc={thakali}  title="Thakali" para="Thakali is" />
            <MenuCard imgSrc={burger}  title="Burger" para="Chiecken is best"/>
            
            </div>

            </div>

          </div>

          {/*............................. menu .......................*/}

{/* food quality container */}
        <div className="choose-food-container">
          <div className="choose-food-image">
            <div className="left-food-image">
              <img className="food-image" src={pizza} alt="foodimage"/>

            </div>
            <div className="right-food-info">
                <div className="food-taste">
                <div className="food-icon">
                    <p>logo</p>
                </div>
                <div className="food-info">

                  <p className="food-title">Good Food Quality</p>
                  <p className="food-description">Looking for perfect destination to spend a quality time with good food and peaceful environment? Come pay us a visit today!
                  </p>
                </div>
                </div>


                <div className="food-taste">
                <div className="food-icon">
                    <p>Icon</p>
                </div>
                <div className="food-info">

                  <p className="food-title">Fast Delivery</p>
                  <p className="food-description">Looking for perfect destination to spend a quality time with good food and peaceful environment? Come pay us a visit</p>
                </div>
                </div>
                

                <div className="food-taste">
                 <div className="food-icon">
                    <p>Icon</p>
                </div>
                <div className="food-info">

                  <p className="food-title">Best Price</p>
                  <p className="food-description">Looking for perfect destination to spend a quality time with good food and peaceful environment? Come pay us a visit</p>
                </div>
                </div>

            </div>

          </div>

        </div>

        {/* food quality container */}

        {/* group meeting */}

        <div className="hall-container">
          <div className="hall-main-info">
            <div className="hall-image-data">
              <img  className="hall-img" src={inside} alt="img1" />
              <img className="hall-img-pizza" src={headerImg} alt="img2" />

            </div>
            <div className="hall-info">
              <h4>Hall Meetings</h4>
              <p>Looking for perfect destination to spend a quality time with good food 
              and peaceful environment? Come pay us a visit today!
              Looking for perfect destination to spend a quality time with good food and 
              peaceful environment? Come pay us a visit today!
              </p>
              <div className="hall-book-btn">
                <button className="book-btn"> Book Now</button>
              </div>
              
            </div>

          </div>

        </div>

        </div>
    </div>
  </>

  );
};

export default Main;

