import React, { useState } from "react";
import "./../style.css";

const MetoSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={prevSlide}>‹</button>
      <div className="slider-wrapper">
        {images.map((img, index) => (
          <div
            className={`slide ${index === current ? "active" : ""}`}
            key={index}
          >
            {index === current && <img src={img} alt={`Slide ${index}`} />}
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={nextSlide}>›</button>
    </div>
  );
};

export default MetoSlider;
