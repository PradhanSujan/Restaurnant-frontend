import React from "react";
import pizza from "../../assets/images/pizza.jpg";
import ChooseFoodCard from "./ChooseFoodCard";
import chooseFoodData from "../data/ChooseFoodData";
import "../../assets/style/ChooseFood.scss";
const ChooseFood = () => {
  return (
    <>
      <div className="choose-food-container">
        <div className="choose-food">
          <div className="choose-title">
            <p>Why Choose Us</p>
            <h3>Our Food Taste and Experience</h3>
          </div>

          <div className="choose-food-image">
            <div className="left-food-image">
              <img src={pizza} alt="foodimage" />
            </div>
            <div className="right-food-info">
              {chooseFoodData.map((value, i) => {
                return (
                  <ChooseFoodCard
                    icon={value.icon}
                    title={value.title}
                    description={value.description}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseFood;
