import React from 'react';
import bannerImage from '../assets/banner.png';
import '../styles/Banner.scss';

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Bannière" className="banner-img" />
      <div className="banner-overlay"></div>
      <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;


