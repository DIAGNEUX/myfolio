import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <p>MDN</p>
        </div>
        <div className="link">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/profil">Profil</Link></li>
            <li><Link to="/bts-sio">Bts Sio</Link></li>
            <li><Link to="/ecole">Ecole</Link></li>
            <li><Link to="/entreprise">Entreprise</Link></li>
            <li><Link to="/veille-technologique">Veille technologique</Link></li>
            <li><Link to="/veille-juridique">Veille juridique</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}