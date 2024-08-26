import React from 'react';
import '../styles/Banner.scss';

function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner-img" />
      <div className="banner-overlay"></div>
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  );
}

export default Banner;
