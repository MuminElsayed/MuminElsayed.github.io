import React from "react";
import "../Styles/QuadImagePreview.css";

function ImagePreview({ imageUrl1, imageUrl2, imageUrl3, imageUrl4 }) {
  return (
    <div className="gallery">
      <img src={imageUrl1} alt="First" />
      <img src={imageUrl2} alt="Second" />
      <img src={imageUrl3} alt="Third" />
      <img src={imageUrl4} alt="Fourth" />
    </div>
  );
}

export default ImagePreview;
