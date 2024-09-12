import React, { useState } from "react";
import "../styles/Slideshow.scss";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Je gère l'index de l'image

  const nextSlide = () => {
    /// Je passe à l'image suivante, et je retourne au début si j'arrive à la fin
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    // Je passe à l'image précédente, et je retourne à la dernière image si je suis au début
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-container">
      {/* J'affiche l'image */}
      <img
        src={images[currentIndex]}
        alt="Slideshow"
        className="slide-image"
      />

      
    {/* Affiche les flèches de navigation seulement s'il y a plus d'une image */}
    {images.length > 1 && (
        <>
          <button className="arrow left" onClick={prevSlide}>
            <MdArrowBackIosNew />
          </button>

          <button className="arrow right" onClick={nextSlide}>
            <MdArrowForwardIos />
          </button>
        </>
      )}

     {/* J'affiche le numéro de page seulement s'il y a plus d'une image */}
     {images.length > 1 && (
        <div className="page-number">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
