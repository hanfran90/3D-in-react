import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const SpinningCube = () => {
  const cubeRef = useRef();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef} position={[10, 0, 0]}>
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default SpinningCube;
