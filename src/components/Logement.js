import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Slideshow from './Slideshow';
import Collapse from './Collapse';
import logements from '../datas/logements.json';
import '../styles/Logement.scss';

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="logement">
      <Slideshow images={logement.pictures} />
      <div className="logement-info">
        <div className="logement-header">
          <div className="logement-title">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <div className="logement-host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
        </div>
        <div className="logement-tags-rating">
          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <div className="logement-rating">
            {Array(5)
              .fill()
              .map((_, index) => (
                <span key={index} className={index < logement.rating ? 'active' : ''}>
                  ★
                </span>
              ))}
          </div>
        </div>
      </div>
      <div className="logement-collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments.join(', ')} />
      </div>
    </div>
  );
}

export default Logement;
