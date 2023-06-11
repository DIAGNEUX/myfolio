import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useSnapshot } from 'valtio';

import state from './State';

const Box = () => {
  const snap = useSnapshot(state);
  const groupRef = useRef();

  useFrame((state) => {
    const { pointer } = state;
    const { x, y } = pointer;

    const verticalPosition = Math.sin(state.clock.elapsedTime * 1) * 0.1; 

    groupRef.current.position.x = x / 3;
    groupRef.current.position.y = -y / 3 + verticalPosition;
  });

  const { scene: scene6 } = useGLTF(`${process.env.PUBLIC_URL}/css.glb`);
  const { scene: scene3 } = useGLTF(`${process.env.PUBLIC_URL}/intel.glb`);
  const { scene: scene4 } = useGLTF(`${process.env.PUBLIC_URL}/php.glb`);
  const { scene: scene5 } = useGLTF(`${process.env.PUBLIC_URL}/another.glb`);

  const stateString = JSON.stringify(snap);

  return (
    <group ref={groupRef} key={stateString}>
      <group position={[7, -3, 0]} rotation={[0, Math.PI, 0]}>
        <primitive object={scene4} dispose={null} scale={[0.4, 0.4, 0.4]} />
      </group>
      <group position={[-7, -3, 0]}>
        <primitive object={scene3} dispose={null} scale={[0.3, 0.3, 0.3]} />
      </group>
      <group position={[-7, 2, 0]}>
        <primitive object={scene6} dispose={null} scale={[0.5, 0.5, 0.5]} />
      </group>
      <group position={[7, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <primitive object={scene5} dispose={null} scale={[0.5, 0.5, 0.5]} />
      </group>
    </group>
  );
};

export default Box;

