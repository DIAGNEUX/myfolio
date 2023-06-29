import React from 'react'
import veille from './assets/first Veille technologique.pdf'
import outil from './assets/Les outils de la veille technologie.pdf'
import image from './assets/UI and UX.png'

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
      <a href={outil}>
        <button>  Consulter la documentation sur les outils
          <br /> de la veille technologique</button>
      </a>
      </div>
      <div className="lesveilles">

        <div className='first'>
          <div className='first_cont'>
            <a href={veille}>
          <img src={image} alt="" width={"500px"} height={"400px"} />  
          </a>
          </div>
        </div>

        <div className='second'>
          <div className='sec_cont'>
          <h1>Deuxieme Veille</h1>
         
        </div>  
        </div>

      </div>
    </div>
  )
}

export default VeilleTechnologique