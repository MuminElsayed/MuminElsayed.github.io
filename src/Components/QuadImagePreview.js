import React from 'react';
import "../Styles/QuadImagePreview.css";

function ImagePreview({ imageUrl1, imageUrl2, imageUrl3, imageUrl4 }) {
  return (
    <div class="gallery">
      <img src={imageUrl1} alt="Image 1"/>
      <img src={imageUrl2} alt="Image 2"/>
      <img src={imageUrl3} alt="Image 3"/>
      <img src={imageUrl4} alt="Image 4"/>
    </div>
  )
}

export default ImagePreview;
