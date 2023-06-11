import React from 'react'
import glpi from './assets/GLPI.png'
import library from './assets/library.png'
import ap from './assets/ps_site.png'
import web from './assets/web.png'
import views from './assets/views.png'

const Ecole = () => {
  return (
    <div className='ecole'>
      <h1>Mes projets</h1>
      <div className="wrap_projet">
      <div className='projet'>
  
        <div className='projet_contain'>
        <div className='projet_img'>
          <div>
          <img className='theimg' src={glpi} alt="" />
          <div className='link'>
            <p><img src={web} alt=""  /></p>
            <p> <img src={views} alt="" /> </p>
          </div>
          </div>
        </div>
        <ul className='projet_tags'>
          <li> <span>#</span> HTML</li>
          <li> <span>#</span> CSS</li>
          <li> <span>#</span> Javascript</li>
        </ul>
        </div>

        <div className='projet_contain'>
        <div className='projet_img'>
          <img className='theimg' src={library} alt="" />
          <div className='link'>
            <p><img src={web} alt=""  /></p>
            <p> <img src={views} alt="" /> </p>
          </div>
        </div>
        <ul className='projet_tags'>
          <li> <span>#</span> PHP</li>
          <li> <span>#</span> MySQL</li>
          <li> <span>#</span> API</li>
          <li> <span>#</span> CSS</li>
          
        </ul>
        </div>

        <div className='projet_contain'>
        <div className='projet_img'>
          
          <img className='theimg' src={ap} alt="" />
          <div className='link'>
            <p><img src={web} alt=""  /></p>
            <p> <img src={views} alt="" /> </p>
          </div>
          
        </div>
        <ul className='projet_tags'>
          <li> <span>#</span> HTML</li>
          <li> <span>#</span> CSS</li>
          <li> <span>#</span> Javascript</li>
        </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Ecole