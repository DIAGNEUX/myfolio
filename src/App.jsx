import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Accueil from './Accueil';
import Profil from './Profil';
import BtsSio from './BtsSio.jsx';
import Ecole from './Ecole';
import Entreprise from './Entreprise';
import VeilleTechnologique from './VeilleTechnologique';
import VeilleJuridique from './VeilleJuridique';
import "./App.css";
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import gmail from './assets/gmail.png';
import Loading from './Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulation d'un délai de chargement de 2 secondes
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <div className={isLoading ? "App loading" : "App"}>
      {isLoading && <div className="loading-overlay">    
        <Loading /> 
        </div>}
      <div className='wrapper'> 
        <div className="Navbar">
          <Navbar />
        </div>
        <div className='container'>
          <Routes>
            <Route path="/myfolio" element={<Accueil />} />
            <Route path="/" element={<Accueil />} exact />
            <Route path="/profil" element={<Profil />} />
            <Route path="/bts-sio" element={<BtsSio />} />
            <Route path="/ecole" element={<Ecole />} />
            <Route path="/entreprise" element={<Entreprise />} />
            <Route path="/veille-technologique" element={<VeilleTechnologique />} />
            <Route path="/veille-juridique" element={<VeilleJuridique />} />
          </Routes>
          <div className='contact'>
            <li> <img src={linkedin} alt="" /> </li>
            <li> <img src={github} alt="" /> </li>
            <li> <img src={gmail} alt="" /> </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
