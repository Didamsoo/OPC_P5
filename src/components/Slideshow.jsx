import React, { useState } from "react";
import "../styles/Slideshow.scss";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-container">
      <img
        src={images[currentIndex]}
        alt="Slideshow"
        className="slide-image"
      />

      <button className="arrow left" onClick={prevSlide}>
        <MdArrowBackIosNew />
      </button>

      <button className="arrow right" onClick={nextSlide}>
        <MdArrowForwardIos />
      </button>

      <div className="page-number">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
};

export default Slideshow;
