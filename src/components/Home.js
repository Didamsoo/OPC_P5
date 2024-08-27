import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Card from './Card';
import bannerImage from '../assets/banner.png';
import logements from '../datas/logements.json';
import '../styles/Home.scss';

function Home() {
  return (
    <div className="home">
      <Banner image={bannerImage} title="Chez vous, partout et ailleurs" />
      <div className="gallery">
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
