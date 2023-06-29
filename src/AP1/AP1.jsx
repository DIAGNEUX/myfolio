import React, { useState } from 'react';
import pdf from '../assets/icons8-pdf-64.png';
import Modal from 'react-modal';
import './AP.css';
import kbis from './docs/Kbis.pdf';
import Eratech from './docs/Présentation de Eratech.pdf';
import Facture from './docs/1022-M-Nathan-LAURY.pdf';
import Presentation from './docs/Présentation projet slam.pdf';
import Equipe from './docs/Equipe.pdf';
import Etude from './docs/Etude de Marche.pdf';
import close from '../assets/Close.png'

Modal.setAppElement('#root');

const AP1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState('');

  const openModal = (pdf) => {
    setSelectedPdf(pdf);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPdf('');
    setIsOpen(false);
  };

  return (
    <div className='AP1'>
      <ul>
        <li>
          <img src={pdf} alt="" />
          <p onClick={() => openModal(Eratech)}>Presentation Eratech</p>
        </li>
        <li>
          <img src={pdf} alt="" />
          <p onClick={() => openModal(kbis)}>Kbis</p>
        </li>
        <li>
          <img src={pdf} alt="" />
          <p onClick={() => openModal(Facture)}>Facture</p>
        </li>
        <li>
          <img src={pdf} alt="" />
          <p onClick={() => openModal(Etude)}>Etude de marché</p>
        </li>
        <li>
          <img src={pdf} alt="" />
          <p onClick={() => openModal(Equipe)}>Equipe</p>
        </li>
        <li>
          <img src={pdf} alt="" />
          <p onClick={() => openModal(Presentation)}>Presentation du projet</p>
        </li>
      </ul>

      {isOpen && (
        <div className="overlay">
          <div className="modal">
            <img src={close}  className="closeButton" onClick={closeModal} alt="" />
           
            <iframe src={selectedPdf} width="100%" height="500px" title="PDF Viewer" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AP1;
