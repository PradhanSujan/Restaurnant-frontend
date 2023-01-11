import React from "react";
import "../../assets/style/Events.scss";
const EventCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={props.image} alt="img" />
        </div>
        <div className="card-content">
          <h4>{props.title}</h4>
          <p>{props.para}</p>
          <button className="event-btn btn">Book Now</button>
        </div>
      </div>
    </>
  );
};

export default EventCard;
