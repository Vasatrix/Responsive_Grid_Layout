import React from "react";
import "./ImageCard.css";

const ImageCard = ({ src, title }) => {
  return (
    <div className="image-card">
      <img src={src} alt={title} />
      <div className="overlay">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ImageCard;
