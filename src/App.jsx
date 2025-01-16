import React from "react";
import { Route, Routes } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import BoxGeometry from "./Components/BoxGeomtery";
import SpinningCube from "./Components/SpinningCube";
import InteractiveCube from "./Components/InteractiveCube";
import { OrbitControls } from "@react-three/drei";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import BouncingSphere from "./Components/BouncingSphere";
import SphereFloor from "./Components/SphereFloor";

const App = () => (
  <>
    <Header />
    <NavBar />
    <Routes>
      <Route path="/" />
      <Route
        path="/squares"
        element={
          <Canvas camera={{ position: [23, 10, 10] }}>
            <ambientLight intensity={1.2} />
            <pointLight position={[10, 10, 10]} />
            <BoxGeometry />
            <SpinningCube />
            <InteractiveCube />
            <OrbitControls />
          </Canvas>
        }
      />
      <Route
        path="/spheres"
        element={
          <Canvas camera={{ position: [30, 10, 10] }}>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} />
            <BouncingSphere />
            <SphereFloor />
            <OrbitControls />
          </Canvas>
        }
      />
      <Route
        path="*"
        element={<p>Page does not exist! Please enter a valid path.</p>}
      />
    </Routes>
  </>
);

export default App;
