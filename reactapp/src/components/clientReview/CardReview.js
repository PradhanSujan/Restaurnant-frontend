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
                  <img src="" alt="img" />
                </div>
                <div className="client-info">
                  <p className='client-name'>{props.name}</p>
                  <p>{props.address}</p>
                </div>
              </div>
              </div>
    </>
  )
}

export default CardReview
