import React from 'react';
import '../styles/Banner.scss';

function Banner({ image, title }) {
  // La bannière affiche une image et un titre optionnel
  return (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner-img" />
      <div className="banner-overlay"></div>{/* Je crée un overlay pour l'effet */}
      {title && <h1 className="banner-title">{title}</h1>} {/* Si un titre est fourni, je l'affiche */}
    </div>
  );
}

export default Banner;
