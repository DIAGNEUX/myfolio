import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import glpi from './assets/GLPI.png';
import library from './assets/library.png';
import ap from './assets/ps_site.png';
import web from './assets/web.png';
import views from './assets/views.png';
import folder from './assets/icons8-folder-30.png';
import GLPI from './assets/glpi.pdf'
import lib from './assets/Alioune DIAGNE Document.pdf'

const Ecole = () => {
  const navigate = useNavigate();

 

  const handleFolderClick = () => {
    navigate('/ap1'); // Replace with the actual path to your Ap1.jsx page
  };

  return (
    <div className="ecole">
      <h1>Mes projets</h1>
      <div className="wrap_projet">
        <div className="projet">
          <div className="projet_contain">
            <div className="projet_img">
              <div>
                <img className="theimg" src={glpi} alt="" />
                <div className="link">
                  <a href={GLPI}>
                  <p>
                    <img src={views} alt="" />
                  </p>
                  </a>
                  
                </div>
              </div>
            </div>
            <ul className="projet_tags">
              <li>
                <span>#</span> HTML
              </li>
              <li>
                <span>#</span> CSS
              </li>
              <li>
                <span>#</span> Javascript
              </li>
            </ul>
          </div>

          <div className="projet_contain">
            <div className="projet_img">
              <img className="theimg" src={library} alt="" />
              <div className="link">
                
                <a href={lib}>
                <p>
                  <img src={folder} alt="" />
                </p>
                </a>
              </div>
            </div>
            <ul className="projet_tags">
              <li>
                <span>#</span> PHP
              </li>
              <li>
                <span>#</span> MySQL
              </li>
              <li>
                <span>#</span> API
              </li>
              <li>
                <span>#</span> CSS
              </li>
            </ul>
          </div>

          <div className="projet_contain">
            <div className="projet_img">
              <img className="theimg" src={ap} alt="" />
              <div className="link">
                <p>
                  <a href="https://diagneux.github.io/eratech/" target="_blank" rel="noopener noreferrer">
                    <img src={web} alt="Website" />
                  </a>
                </p>
                
                <p onClick={handleFolderClick}>
                  <img src={folder} alt="Folder" />
                </p>
              </div>
            </div>
            <ul className="projet_tags">
              <li>
                <span>#</span> HTML
              </li>
              <li>
                <span>#</span> CSS
              </li>
              <li>
                <span>#</span> Javascript
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecole;
