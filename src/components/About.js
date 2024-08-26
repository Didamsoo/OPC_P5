import React from 'react';
import Collapse from '../components/Collapse';
import '../styles/About.scss';
import Banner from './Banner';

function About() {
  return (
    <div className="about">
      <header className="header">
        <div className="kasa-logo">
          <img src="../assets/logo.png" alt="logo Kasa" />
        </div>
        <nav>
          <a href="/">Accueil</a>
          <a href="/about">À Propos</a>
        </nav>
      </header>
      <Banner imageUrl="../assets/bannerAbout.png" />
      <Collapse title="Fiabilité">
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale...</p>
      </Collapse>
      <Collapse title="Respect">
        <p>La bienveillance fait partie des valeurs fondamentales de Kasa...</p>
      </Collapse>
      <Collapse title="Service">
        <p>Nos équipes sont à votre disposition pour vous fournir une expérience parfaite...</p>
      </Collapse>
      <Collapse title="Responsabilité">
        <p>La sécurité est la priorité de Kasa...</p>
      </Collapse>
    </div>
  );
}

export default About;
