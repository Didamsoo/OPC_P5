import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import About from './About'; 
import NotFound from './NotFound'; 
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
