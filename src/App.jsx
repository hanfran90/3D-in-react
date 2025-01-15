import React from "react";
import { Canvas } from "@react-three/fiber";

const App = () => (
  <Canvas camera={{ position: [5, 5, 5] }}>
    <ambientLight intensity={3.0} />
    <pointLight position={[10, 10, 10]} />
    <mesh>
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial color="red" />
    </mesh>
  </Canvas>
);

export default App;
