import React from 'react';
import tableau from './assets/Tableau de synthèse - Epreuve E4 - BTS SIO 2023.pdf';

const Entreprise = () => {
  return (
    <div className='Entreprise'>
      <h1>Entreprise</h1>
      <div className='Ent_contain'>
        <div className='Ent_par'>
          <p>
            Sentechs est une entreprise qui met à votre disposition ses ressources et son expérience pour répondre à tous vos besoins technologiques. Que vous soyez en France ou à l'international, nous sommes là pour vous accompagner dans tous vos projets Tech.
            Notre mission est de servir les entreprises et les leaders technologiques qui créent des logiciels tels que SAP, Salesforce, Azure et AWS. Grâce à notre expertise approfondie en développement de logiciels, notamment dans la conception de l'interface utilisateur, l'implémentation front-end et back-end, ainsi que la formation, nos développeurs peuvent vous aider à accélérer l'exécution et la livraison de vos produits.
          </p>
        </div>
        <div className='Ent_img'>
          <h1>SENTECHS</h1>
        </div>
      </div>
     <div className='tableau'>
      <div>
      <h1>Tableau de synthèse</h1>
      <embed src={tableau} type="application/pdf" width="900px" height="800px" />
      </div>
      </div>
    </div>
  );
}

export default Entreprise;
