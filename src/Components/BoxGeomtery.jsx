import React from "react";

const BoxGeometry = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default BoxGeometry;
