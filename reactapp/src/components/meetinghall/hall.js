import React from 'react'
import meetingHall from '../../assets/images/meetinghall.png';
import hallImg from '../../assets/images/hall.png';

const hall = () => {
  return (
    <>
        <div className="hall-container">
          <div className="hall-main-info">
            <div className="hall-image">
              <img src={meetingHall} alt="img1" />
              <img className='hall-img-bottom' src={hallImg} alt="img2" />

            </div>
            <div className="hall-info">
              <h3>Hall Meetings</h3>
              <p>Looking for perfect destination to spend a quality time with good food 
              and peaceful environment? Come pay us a visit today!
              Looking for perfect destination to spend a quality time with good food and 
              peaceful environment? Come pay us a visit today!
              </p>
              <div className="hall-book-btn">
                <button className="book-btn"> Book Now</button>
              </div>
              
            </div>

          </div>

        </div>

    </>
  )
}

export default hall
