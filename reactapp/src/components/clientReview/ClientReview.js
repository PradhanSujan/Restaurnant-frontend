import React from "react";
import CardReview from "./CardReview";
import ClientReviewData  from './ClientReviewData';

const ClientReview = () => {
  return (
    <>
      <div className="client-review">
        <div className="client-container">
          <div className="client-title">
            <h4>Our Client Review</h4>
          </div>

          <div className="client-review-section">
            {
              ClientReviewData.map((value)=>{
                return <CardReview name={value.name} address={value.address} 
                  image={value.img} review={value.review}
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
