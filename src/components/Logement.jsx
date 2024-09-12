import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Slideshow from './Slideshow';
import Collapse from './Collapse';
import logements from '../datas/logements.json';
import Tag from './Tag';
import Rating from './Rating';
import '../styles/Logement.scss';

function Logement() {
    // J'utilise useParams pour récupérer l'ID du logement dans l'URL
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  // Si le logement n'est pas trouvé, je redirige vers la page 404
  if (!logement) {
    return <Navigate to="/404" />;
  }

    // Je convertis le rating en nombre entier
  const rating = parseInt(logement.rating, 10);

  return (
    <main className="logement">
    {/* J'affiche le slideshow avec les images du logement */}
      <Slideshow images={logement.pictures} />
      <div className="logement-info">
        <div className="logement-header">
          <div className="logement-title">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <div className="logement-tags">
              {/* J'affiche les tags du logement */}
              {logement.tags.map((tag, index) => (
                <Tag key={`${tag}-${index}`} text={tag} />
              ))}
            </div>
          </div>
          <div className="logement-host-rating">
            <div className="logement-host">
              {/* Je récupère l'image et le nom de l'hôte */}
              <img
                src={logement.host.picture}
                alt={logement.host.name}
                className="logement-host-picture"
              />
              <div className="logement-host-info">
                <p>{logement.host.name.split(' ')[0]}</p>
                <p>{logement.host.name.split(' ')[1]}</p>
              </div>
            </div>
            <div className="logement-rating">
              {/* J'affiche le rating sous forme d'étoiles */}
              <Rating numberOfStars={rating} />
            </div>
          </div>
        </div>
      </div>
      <div className="logement-collapses">
        {/* J'affiche les informations supplémentaires dans les collapses */}
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments.join(', ')} />
      </div>
    </main>
  );
}

export default Logement;
