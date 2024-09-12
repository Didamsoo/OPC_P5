import React from 'react';
import '../styles/Tag.scss';
import PropTypes from 'prop-types';

function Tag({ text }) {
  // Le composant Tag affiche un tag spécifique
  return (
    <div className="tag">
      {text}
    </div>
  );
}

Tag.propTypes = {
  text: PropTypes.string.isRequired, // Je m'assure que 'text' est requis et est une string
};

export default Tag;
