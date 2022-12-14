import React from 'react'

const CardReview = (props) => {
  return (
    <>
            <div className="client-section">
            <div className="client-para">
                <p>
                  {props.review}
                </p>
              </div>
              <div className="client-details">
                <div className="client-image">
                  <img src={props.image} alt="img" />
                </div>
                <div className="client-info">
                  <h5>{props.name}</h5>
                  <p>{props.address}</p>
                </div>
              </div>
              </div>
    </>
  )
}

export default CardReview
