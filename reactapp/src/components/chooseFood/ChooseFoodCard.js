import React from "react";

const ChooseFoodCard = (props) => {
  return (
    <>
      <div className="food-taste">
        <div className="food-icon">
          <p className="icon">{props.icon}</p>
        </div>
        <div className="food-info">
          <p className="food-title">{props.title}</p>
          <p className="food-description">
           {props.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ChooseFoodCard;
