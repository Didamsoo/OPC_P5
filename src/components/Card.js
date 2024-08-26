import React from 'react';
import '../styles/Card.scss';

function Card({ title, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-img" />
      <div className="card-overlay"></div>
      <h2 className="card-title">{title}</h2>
    </div>
  );
}

export default Card;
