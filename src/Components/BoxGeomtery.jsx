import React from "react";

const BoxGeometry = () => {
  return (
    <mesh position={[-10, 0, 0]}>
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default BoxGeometry;
