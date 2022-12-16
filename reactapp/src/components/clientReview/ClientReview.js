import React from "react";
import CardReview from "./CardReview";
import ClientReviewData  from './ClientReviewData';

const ClientReview = () => {
  return (
    <>
      <div className="client-review">
        <div className="client-container">
          <div className="client-title">
            <h3>Our Client Review</h3>
          </div>

          <div className="client-review-section">
            {
              ClientReviewData.map((value, i)=>{
                return <CardReview name={value.name} address={value.address} 
                  image={value.image} review={value.review} key={i}
                />

              })
            }
          </div>
        </div>
      </div>
        <hr/>
    </>
  );
};

export default ClientReview;
