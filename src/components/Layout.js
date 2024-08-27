import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <div className="kasa-logo">
          <img src={logo} alt="logo Kasa" />
        </div>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </nav>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;