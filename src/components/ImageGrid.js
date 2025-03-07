import React from "react";
import "../styles.css"; 
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";

// Image data array
const images = [
  { id: 1, src: image1, title: "Mountain View" },
  { id: 2, src: image2, title: "Ocean Waves" },
  { id: 3, src: image3, title: "Desert" },
  { id: 4, src: image4, title: "City Lights" },
  { id: 5, src: image5, title: "Forest Path" },
  { id: 6, src: image6, title: "Sunset Beach" },
  { id: 7, src: image7, title: "Night Sky" },
  { id: 8, src: image8, title: "Snow Town" },
];

const ImageGrid = () => {
  return (
    <div className="image-grid-container">
      <div className="image-grid">
        {images.map((img) => (
          <div key={img.id} className="image-card">
            <img src={img.src} alt={img.title} className="grid-image" />
            <p className="image-title">{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
