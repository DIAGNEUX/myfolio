import React from 'react'
import user from './assets/user.jpg'
import html from './assets/html.png'
import css from './assets/css.png'
import mysql from './assets/mysql.png'
import Node from './assets/NodeJS.png'
import php from './assets/php.png'
import react from './assets/react.png'
import javascript from './assets/javascript.png'
import realgit from './assets/Github-real.png'
import blender from './assets/blender.png'
import { motion } from 'framer-motion'

const Profil = () => {
  const comptVariant = {
    visible : {
      opacity : 1 ,
      y: 0,
      transition:{ duration : 1 }
    },
    hidden : {
      opacity:0 ,
      y:20
    }
  }
  
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
       <div className="compt_contain">
        <motion.ul 
        variants={{
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
        initial="hidden"
        animate="visible"
        >
          <motion.li variants={comptVariant}>
                <img src={html} alt="" />
              </motion.li>
              <motion.li variants={comptVariant}>
                <img src={css} alt="" />
              </motion.li>
              <motion.li variants={comptVariant}>
                <img src={javascript} alt="" />
              </motion.li>
              <motion.li variants={comptVariant}>
                <img src={react} alt="" />
              </motion.li>
              <motion.li variants={comptVariant}>
                <img src={php} alt="" />
              </motion.li>
              <motion.li variants={comptVariant}>
                <img src={Node} alt="" />
              </motion.li>
              <motion.li variants={comptVariant}>
                <img src={mysql} alt="" />
              </motion.li>
              <motion.li variants={comptVariant}>
                <img src={realgit} alt="" />
              </motion.li>
              <motion.li variants={comptVariant}>
                <img src={blender} alt="" />
              </motion.li>
        </motion.ul>
       </div>
       <div className='par_compt'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam delectus sed enim voluptatum vitae repudiandae ducimus, nemo eos earum culpa alias unde! Ab, possimus. Ipsa explicabo id quam repudiandae facilis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem neque dicta qui dolores aliquam! Consequatur fugit laboriosam pariatur doloremque, modi perferendis ullam, nemo culpa labore blanditiis praesentium odio impedit vitae.
        </p>
       </div>
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