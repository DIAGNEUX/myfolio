import React from 'react'

const VeilleTechnologique = () => {
  return (
    <div className='V_tech'>
      <h1>Veille Technologique</h1>
      <p>La veille technologique désigne l'ensemble des méthodes légales employées pour organiser de manière systématique la collecte d'informations technologiques,
         leur analyse, leur diffusion et leur exploitation en vue de soutenir la croissance et le développement d'une entreprise. Elle implique l'observation et l'analyse
          des avancées scientifiques et techniques des produits, des processus de fabrication, des matériaux ainsi que des impacts économiques qu'ils engendrent, tant actuels que futurs.
           La veille technologique nécessite une surveillance constante des nouvelles technologies et de leur mise en marché, ainsi qu'une recherche continue de la meilleure façon de les exploiter.
      </p>
      <div className='tools'>
        <button>Consulter la documentation sur les outils
          <br /> de la veille technologique</button>
      </div>
      <div className="lesveilles">

        <div className='first'>
          <div className='first_cont'>
          <h1>Premiere Veille</h1>
          <p>Pas d'info pour le moment</p>
          </div>
        </div>

        <div className='second'>
          <div className='sec_cont'>
          <h1>Deuxieme Veille</h1>
          <p>pas d'info pour le moment</p>
        </div>  
        </div>

      </div>
    </div>
  )
}

export default VeilleTechnologique