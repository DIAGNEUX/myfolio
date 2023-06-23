import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Avatar } from './avatar';

const Scene = () => {
  const group = useRef();
  const { scene } = useGLTF(`${process.env.PUBLIC_URL}/desk.glb`);

  useFrame(() => {
   
  });

  return (
    <group ref={group} dispose={null} rotation-y={0.4}  position={ [ 1 , -1, 0.4]}>
      <primitive object={scene} scale={[0.4 , 0.4 , 0.4]}  />
      <Avatar />
    </group>
  );
};

export default Scene;
