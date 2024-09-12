import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Logement from './Logement';
import NotFound from './NotFound';
import Layout from './Layout';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  // J'utilise un Router pour la navigation entre les pages
  return (
    <Router>
      <Layout>
        <Routes>
          {/* J'utilise les routes pour définir les différentes pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<NotFound />} /> {/* Si la page n'existe pas, j'affiche la page 404 */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
