import React from "react";
import MenuCard from "./MenuCard";
import pizza from '../../assets/images/pizza.jpg';
import chicken from '../../assets/images/chicken.jpg';
import thakali from '../../assets/images/thakali.jpg';
import burger from '../../assets/images/burger.jpg';

const Menu = () => {
  return (
    <>
      <div className="menu-section">
        <div className="menu-container">
          <div className="menu-description">
            <h3>Our Special Menu</h3>
            <p>Get here all dishes</p>
          </div>

          <div className="menu-content">
            <MenuCard imgSrc={pizza} title="Pizza" para="piza is best" />
            <MenuCard
              imgSrc={chicken}
              title="Chicken Roast"
              para="chieck is best"
            />
            <MenuCard imgSrc={thakali} title="Thakali" para="Thakali is" />
            <MenuCard imgSrc={burger} title="Burger" para="Chiecken is best" />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Menu;
