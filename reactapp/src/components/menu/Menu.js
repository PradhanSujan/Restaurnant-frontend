import React from "react";
import MenuCard from "./MenuCard";
import pizza from "../../assets/images/pizza.jpg";
import chicken from "../../assets/images/chicken.jpg";
import thakali from "../../assets/images/thakali.jpg";
import burger from "../../assets/images/burger.jpg";
import "../../assets/style/Menu.scss";

const Menu = () => {
  return (
    <>
      <div className="menu-section">
        <div className="menu-container">
          <div className="menu-description">
            <p>Choose & Pick</p>
            <h3>Our Special Menu</h3>
          </div>

          <div className="menu-content">
            <MenuCard imgSrc={pizza} title="Pizza" price="Rs 330" />
            <MenuCard imgSrc={chicken} title="Chicken Roast" price="Rs 200" />
            <MenuCard imgSrc={thakali} title="Thakali" price="Rs 300" />
            <MenuCard imgSrc={burger} title="Burger" price="Rs 100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
