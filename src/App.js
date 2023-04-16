import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './components/pages/Home';
import Projetos from './components/pages/Projetos';
import Contato from './components/pages/Contato';
import Sobre from './components/pages/Sobre';
import Manutencao from './components/pages/Manutencao'
import IFantasy from './components/pages/IFantasy';
import IFantasyGaleria from './components/pages/IFantasyGaleria';
import IFashion from './components/pages/IFashion';
import IFashionGaleria from './components/pages/IFashionGaleria';
import ExpoArte from './components/pages/ExpoArt';
import ExpoArteGaleria from './components/pages/ExpoArteGaleria';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {

  const [ativaCor, setAtivaCor] = useState(false);

  useEffect(function () {
    function positionScroll() {
      if (window.scrollY > 40) {
        setAtivaCor(true);
      }
      else {
        setAtivaCor(false);
      }
    }

    window.addEventListener('scroll', positionScroll);

  }, []);



  return (
    
    <Router>
      
      <Navbar acao={ativaCor} />

      <Container customClass="min-height">
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/Projetos" element={<Projetos />} />
          <Route exact path="/Contato" element={<Contato />} />
          <Route exact path="/Sobre" element={<Sobre />} />
          <Route exact path="/Arte de Caderno" element={<Manutencao />} />
          <Route exact path="/Abacaxi de Ouro" element={<Manutencao />} />
          <Route exact path="/IFantasy" element={<IFantasy />} />
          <Route exact path="/IFantasyGaleria" element={<IFantasyGaleria />} />
          <Route exact path="/IFashion" element={<IFashion />} />
          <Route exact path="/IFashionGaleria" element={<IFashionGaleria />} />
          <Route exact path="/ExpoArte" element={<ExpoArte />} />
          <Route exact path="/ExpoArteGaleria" element={<ExpoArteGaleria />} />

        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
