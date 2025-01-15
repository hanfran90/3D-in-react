import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const InteractiveCube = () => {
  const cubeRef = useRef();
  const [colour, setColour] = useState("hotpink");

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  const handlePointerOver = () => setColour("yellow");
  const handlePointerOut = () => setColour("hotpink");
  const handleClick = () => setColour("green");

  return (
    <mesh
      ref={cubeRef}
      position={[9, 0, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial color={colour} />
    </mesh>
  );
};

export default InteractiveCube;
