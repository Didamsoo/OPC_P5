import React from 'react';
import '../styles/Rating.scss';

function Rating({ numberOfStars }) {
  const maxStars = 5; // Je définis le nombre maximum d'étoiles

  return (
    <div className="rating">
      {/* Je crée un tableau d'étoiles avec une classe active pour celles qui sont comprises dans le rating */}
      {Array.from({ length: maxStars }, (v, i) => (
        <span
          key={i}
          className={i < numberOfStars ? 'active' : 'inactive'}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
