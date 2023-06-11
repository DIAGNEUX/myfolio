import React, { useEffect } from 'react';
import Box from './Design/Box';
import { Canvas } from '@react-three/fiber';
import state from './Design/State';

const Accueil = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 6 - 3;
      const y = (event.clientY / window.innerHeight) * 6 - 3;

      state.pointer.x = Math.max(Math.min(x, 0.2), -0.2);
      state.pointer.y = Math.max(Math.min(y, 0.2), -0.2);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div>
        <div className='flex_presentation'>
          <div className='presentation'>
            <p>Bonjour je m'appelle <span >Alioune Diagne</span> </p>
            <p>Je suis étudiant en BTS SIO </p>
            <p>Option SLAM</p>
          </div>
        </div>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box />
        </Canvas>
      </div>
    </div>
  );
};

export default Accueil;
