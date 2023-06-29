import React, { useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import cv from "./assets/diagne-alioune-cv+(8).pdf"

const Accueil = () => {
  
  return (
   
      <div>
        <div className='flex_presentation'>
          <div className='presentation'>
            <div>
            <p>Bonjour je m'appelle <span >Alioune</span> </p>
            <p>Je suis étudiant en BTS SIO </p>
            <p>Option SLAM</p>
            <h5 class="desc">
                    Je suis passionné par les technologies de l'information
                     et de la communication,  et j'ai choisi de suivre cette 
                      filière car elle offre de nombreuses opportunités 
                       dans le domaine de l'informatique.
            </h5>
            <button >  <a href={cv}>Consultez mon cv</a> </button>
            </div>
          </div>
          <div>
          <Canvas shadows camera={{ position: [5,0, 2], fov: 30 }}>
          <color attach="background" args={["#000000"]} />
          <Experience />
          </Canvas>
          </div>
          
      </div >  
      </div>
  );
};

export default Accueil;
