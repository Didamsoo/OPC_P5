import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Card from './Card';
import bannerImage from '../assets/banner.png';
import logements from '../datas/logements.json';
import '../styles/Home.scss';

function Home() {
    // J'affiche ici la page d'accueil avec une bannière et une galerie de logements
  return (
    <div className="home">
            {/* Je place la bannière avec une image et un titre */}
      <Banner image={bannerImage} title="Chez vous, partout et ailleurs" />
      <div className="gallery">
        {/* Je boucle sur les logements pour afficher chaque carte avec un lien vers la page du logement */}
        {logements.map((logement) => (
          <Link key={logement.id} to={`/logement/${logement.id}`}>
            <Card title={logement.title} imageUrl={logement.cover} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
