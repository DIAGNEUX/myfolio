import React, { useState } from 'react';
import user from './assets/user.jpg';
import html from './assets/html.png';
import css from './assets/css.png';
import mysql from './assets/mysql.png';
import Node from './assets/NodeJS.png';
import php from './assets/php.png';
import react from './assets/react.png';
import javascript from './assets/javascript.png';
import realgit from './assets/Github-real.png';
import blender from './assets/blender.png';
import { motion } from 'framer-motion';
import photo from './assets/Alioune_diagne-removebg-preview.png'

const Profil = () => {
  const [showExperience, setShowExperience] = useState(false);
  const [showProjet, setShowProjet] = useState(false);


  const toggleExperience = () => {
    setShowExperience(!showExperience);
  };

  const toggleProjet = () => {
    setShowProjet(!showProjet);
  };


  const comptVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <div className="wrap_profil">
      <div className="profil">
        <div className='user_photo'>
          <div className="user">
            <img src={photo} alt="" />
          </div>
        </div>
        <div className="moi">
          <h1> A propos de moi</h1>
          <div>
            <p>
              Je m'appelle Alioune Diagne, j'ai 21 ans et je suis actuellement en première année de BTS SIO (Service Informatique aux Organisations) à l'IPSSI.
            </p>
            <p>
              Je suis passionné par les technologies de l'information et de la communication, et j'ai choisi de suivre cette filière car elle offre de nombreuses opportunités dans le domaine de l'informatique.
            </p>
          </div>
        </div>
      </div>
      <div className="competence">
        <h1 className="h1_comp">Competence acquise</h1>
        <div className="wrap_competence">
          <div className="compt_contain">
            <div className='motion'>
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
                <img src={blender} alt="" />
              </motion.li>
            </motion.ul>
            </div>
            <div className='compt_text'>
              <ul>
                <li>Developpement Web</li>
                <p>Conception et programmation d'un site web
                             en HTML/CSS/JAVASCRIPT/PHP 
                             REACT/NODE JS</p>
                <li>Gestion de BDD</li>
                <p>Stocker, manipuler et gérer les données
                   dans une base de données via MySQL.</p>
                <li>Git et GitHub</li>
                <p>Contrôle de version, collaboration et gestion de projets avec Git et GitHub.</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap_exp_projet">
        <div className="Experience">
          <div className="exp">
            <h1 onClick={toggleExperience}>Experience professionnelle</h1>
            {showExperience && (
              <div>
                <ul>
                  <h3>Projet Developpeur FullStack</h3>
                  <p>Ipssi - Mars 2023 à avril 2023</p>
                  <li>création d'une librairie</li>
                  <li>l'utilisation des langages PHP MySQL JavaScript CSS HTML</li>
                  <li>L'utilisation d'une API </li>
                  <li>création de logo sur Canvas</li>
                </ul>
                <ul>
                  <h4>Projet Developpeur FrontEnd</h4>
                  <p>Ipssi - Décembre 2022 à janvier 2023</p>
                  <li>Création de site vitrine</li>
                  <li>L'utilisation des langages HTML CSS et JAVASCRIPT</li>
                  <li>création de charte graphique (logo) sur figma </li>
                </ul>
                <ul>
                  <h4>Auto-Entrepreneur</h4>
                  <p>Idrac - Mars 2022 à mai 2022</p>
                  <li>Création d'une boutique en ligne(Wix)</li>
                  <li>Vente de produit</li>
                  <li>sondage et promotion sur le produit</li>
                  <li>Etude de marché</li>
                </ul>
              </div>
            )}
          </div>
        
        <div className="proj">
          <h1 onClick={toggleProjet}>Projet professionnel</h1>
          {showProjet && (
            <p>
              Après l'obtention de mon BTS SIO option SLAM à l'IPSSI, je souhaite poursuivre mes études en faisant un Bachelor en développement web et en applications. Ensuite, je prévois de consolider mes compétences en faisant un Master dans le même domaine. Ces programmes me permettront d'acquérir des compétences spécifiques, telles que la programmation web, la conception d'interface utilisateur, la gestion de base de données, et bien plus encore. Mon objectif professionnel est de devenir un développeur web et d'applications reconnu, en travaillant pour une entreprise innovante ou en créant ma propre entreprise. Mon domaine d'intérêt est le développement de solutions web pour les entreprises et les organisations. Je souhaite créer des applications web efficaces, faciles à utiliser et qui répondent aux besoins des clients.
            </p>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
