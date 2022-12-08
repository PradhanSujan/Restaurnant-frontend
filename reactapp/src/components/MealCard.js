// import React from 'react';
export default function Card(props) {
    return (
      <>
          <div className="meal-card">
            <img src={props.imgSrc} alt="pizza" />
            <h4>{props.title}</h4>
            <p>{props.para}</p>
            <button className="meal-btn">Order Noew</button>
          </div>
      </>
    );
  }

  