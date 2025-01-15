import React from "react";
import { Canvas } from "@react-three/fiber";
import BoxGeometry from "./Components/BoxGeomtery";
import SpinningCube from "./Components/SpinningCube";
import InteractiveCube from "./Components/InteractiveCube";
import { OrbitControls } from "@react-three/drei";

const App = () => (
  <Canvas camera={{ position: [10, 10, 10] }}>
    <ambientLight intensity={1.2} />
    <pointLight position={[10, 10, 10]} />
    <BoxGeometry />
    <SpinningCube />
    <InteractiveCube />
    <OrbitControls />
  </Canvas>
);

export default App;
