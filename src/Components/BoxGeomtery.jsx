import React from "react";

const BoxGeometry = () => {
  return (
    <>
    <axesHelper args={[10]}/>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default BoxGeometry;
