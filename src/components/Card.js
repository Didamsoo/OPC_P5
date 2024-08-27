import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.scss';

function Card({ title, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Card;
