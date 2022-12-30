import React from "react";
import CardReview from "./CardReview";
import ClientReviewData  from './ClientReviewData';
import { FaUserCircle } from "react-icons/fa";

import '../../assets/style/ClientReview.scss';

const ClientReview = () => {
  return (
    <>
      <div className="client-review">
        <div className="client-container">
          <div className="client-title">
          <p>Testimonials</p>
            <h3>Our Client Review</h3>
          </div>

          <div className="client-review-section">
            {
              ClientReviewData.map((value, i)=>{
                return <CardReview name={value.name} address={value.address} 
                  image={value.FaUserCircle} review={value.review} key={i}
                />

              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientReview;
