import React from 'react';
import Banner from './Banner';
import Card from './Card';
import logements from '../datas/logements.json';
import bannerImage from '../assets/banner.png';
import '../styles/Home.scss';

function Home() {
  return (
    <div className="home">
      <Banner image={bannerImage} title="Chez vous, partout et ailleurs" />
      <div className="gallery">
        {logements.map((logement) => (
          <Card key={logement.id} title={logement.title} imageUrl={logement.cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;
