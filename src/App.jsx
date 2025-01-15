import React from "react";
import { Canvas } from "@react-three/fiber";
import BoxGeometry from "./Components/BoxGeomtery";
import SpinningCube from "./Components/SpinningCube";

const App = () => (
  <Canvas camera={{ position: [4, 4, 4] }}>
    <ambientLight intensity={1.2} />
    <pointLight position={[10, 10, 10]} />
    <BoxGeometry />
    <SpinningCube />
  </Canvas>
);

export default App;
