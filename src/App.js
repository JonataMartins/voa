import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './components/pages/Home';
import Projetos from './components/pages/Projetos';
import Sobre from './components/pages/Sobre';
import IFantasy from './components/pages/IFantasy';
import IFashion from './components/pages/IFashion';
import ExpoArte from './components/pages/ExpoArt';
import CantoCoral from './components/pages/CantoCoral';
import Visita from './components/pages/Visita';

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
          <Route exact path="/Sobre" element={<Sobre />} />
          <Route exact path="/IFantasy" element={<IFantasy />} />
          <Route exact path="/IFashion" element={<IFashion />} />
          <Route exact path="/ExpoArte" element={<ExpoArte />} />
          <Route exact path="/CantoCoral" element={<CantoCoral />} />
          <Route exact path="/Visita" element={<Visita />} />

        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
