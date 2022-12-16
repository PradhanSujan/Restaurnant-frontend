import React from "react";
import CardGallery from "./CardGallery";
import gallery1 from '../../assets/images/gallery-1.png';
import gallery2 from '../../assets/images/gallery-2.png';
import gallery3 from '../../assets/images/gallery-3.png';
import gallery4 from '../../assets/images/gallery-4.png';

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <div className="gallery-container">
          <div className="gallery-title">
          <h3>
          Our Gallery
          </h3>
          </div>
          <div className="gallery-images">
            <CardGallery imgSrc={gallery1} />
            <CardGallery imgSrc={gallery2} />
            <CardGallery imgSrc={gallery3} />
            <CardGallery imgSrc={gallery4} />
            <CardGallery imgSrc={gallery2} />
            <CardGallery imgSrc={gallery1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
