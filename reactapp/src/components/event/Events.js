import React from "react";
import sajjan from "../../assets/images/sajjan.png";
import bipulChettri from "../../assets/images/bipulChettri.png";
import worldcup from "../../assets/images/worldcup.png";
import EventCard from "./EventCard";

import "../../assets/style/Events.scss";

const Events = () => {
  return (
    <>
      <div className="event-section">
        <div className="event-container">
          <div className="event-title">
            <p>Let's join</p>
            <h3>Our Events</h3>
          </div>
          <div className="event-cards">
            <EventCard
              image={sajjan}
              title="Sajjan Raj Vaidya Live Performance"
              para="Meet with talented "
            />
            <EventCard
              image={bipulChettri}
              title="Bipul Chettri Concert"
              para="Meet with talented singer"
            />

            <EventCard
              image={worldcup}
              title="Fifa World Cup 2022"
              para="FIFA World Cup 2022 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
