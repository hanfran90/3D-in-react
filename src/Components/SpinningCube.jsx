import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const SpinningCube = () => {
  const cubeRef = useRef();
  console.log(cubeRef);

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef} position={[4, 1, -3]}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default SpinningCube;
