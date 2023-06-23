import React, { useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

const Accueil = () => {
  
  return (
   
      <div>
        <div className='flex_presentation'>
          <div className='presentation'>
            <div>
            <p>Bonjour je m'appelle <span >Alioune</span> </p>
            <p>Je suis étudiant en BTS SIO </p>
            <p>Option SLAM</p>
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
