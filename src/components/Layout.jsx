import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Footer from './Footer';

function Layout({ children }) {
  // Ce composant gère le layout global
  return (
    <div className="layout">
      <header className="header">
        <div className="kasa-logo">
          {/* Je rends le logo cliquable pour retourner à l'accueil */}
          <Link to="/">
            <img src={logo} alt="logo Kasa" />
          </Link>
        </div>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </nav>
      </header>
      <main>{children}</main> {/* Le contenu principal est rendu ici */}
      <Footer /> {/* Le footer global */}
    </div>
  );
}

export default Layout;
