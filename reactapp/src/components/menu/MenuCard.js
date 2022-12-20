// import React from 'react';
export default function MenuCard(props) {
    return (
      <>
          <div className="menu-card">

            <img src={props.imgSrc} alt="pizza" />
            <div className="menu-body">
            <h5>{props.title}</h5>
            <p>{props.para}</p>
            <button className="menu-btn">Order Now</button>
            </div>
          </div>
      </>
    );
  }

  