// import React from 'react';
export default function MenuCard(props) {
    return (
      <>
          <div className="menu-card">
            <img src={props.imgSrc} alt="pizza" />
            <h4>{props.title}</h4>
            <p>{props.para}</p>
            <button className="menu-btn">Order Noew</button>
          </div>
      </>
    );
  }

  