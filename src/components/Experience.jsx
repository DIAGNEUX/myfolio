import { OrbitControls } from "@react-three/drei";
import Scene from "./scene";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Scene />
      <ambientLight intensity={1} />
    </>
  );
};
