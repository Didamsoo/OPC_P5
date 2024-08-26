import React from 'react';
import logo from '../assets/logo.png';
import Banner from './Banner';
import '../styles/Home.scss';
import Card from './Card';
import logements from '../datas/logements.json';

function Home() {
  return (
    <div className="home">
      <header className="header">
        <div className="kasa-logo">
          <img src={logo} alt="logo Kasa" />
        </div>
        <nav>
          <a href="/">Accueil</a>
          <a href="/about">A Propos</a>
        </nav>
      </header>
      <Banner />
      <div className="gallery">
        {logements.map((logement) => (
          <Card key={logement.id} title={logement.title} imageUrl={logement.cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;
