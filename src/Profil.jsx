import React from 'react'
import user from './assets/user.jpg'

const Profil = () => {
  return (
    <div className="wrap_profil">
    <div className="profil">
      <div>
        <div className='user'>
        <img src={user} alt=""  /> 
        </div>
       </div>
      <div className='moi'> 
        <h1> A propos de moi</h1>
        <div >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quidem soluta neque ad id omnis, praesentium ratione tempore laborum fuga nulla voluptates dolor exercitationem dolorum repudiandae optio molestiae totam quam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque excepturi eligendi qui maiores accusamus voluptate voluptatibus fugit alias quae asperiores, rerum aliquam in nihil! Fugit veniam reprehenderit quas culpa!
        </div>
      </div>
    </div>
    <h1 className='h1_comp'>Competence acquise</h1>
    <div className="wrap_competence">
      <div className="competence">
       <h1> pas d'information pour le moment</h1>
      </div>
    </div>

    <div className="Experience">
      <div>
        <h1> Experience professionnelle</h1>
        <p>Pas d'info pour le moment</p>
       
        </div>
      <div>
        <h1>Projet professionnel</h1>
        <p>Pas d'info pour le moment</p>
      </div>
    </div>
    </div>
  )
}

export default Profil