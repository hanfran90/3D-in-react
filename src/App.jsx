import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Canvas, useThree } from "@react-three/fiber";
import BoxGeometry from "./Components/BoxGeomtery";
import SpinningCube from "./Components/SpinningCube";
import InteractiveCube from "./Components/InteractiveCube";
import { OrbitControls } from "@react-three/drei";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import BouncingSphere from "./Components/BouncingSphere";
import SphereFloor from "./Components/SphereFloor";
import TexturedCube from "./Components/TexturedCube";

const CameraUpdater = ({ cameraPosition }) => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(...cameraPosition);
    camera.updateProjectionMatrix();
  }, [camera, cameraPosition]);
};

const App = () => {
  const location = useLocation();
  const [cameraPosition, setCameraPosition] = useState([0, 0, 0]);

  console.log(location.pathname);

  useEffect(() => {
    const cameraPosition = {
      "/cubes": [0, 0, 10],
      "/spheres": [10, 10, 30],
      "/textures": [10, 10, 10],
    };

    setCameraPosition(cameraPosition[location.pathname] || [0, 0, 10]);
  }, [location.pathname]);

  return (
    <main className="test-page">
      <Header className="header" />
      <NavBar className="nav-bar" />
      <Routes>
        <Route path="/" element={<h2>Welcome!</h2>} />
        <Route
          path="/cubes"
          element={
            <>
              <div>
                <h3>Cubes</h3>
                <p>
                  Red = Stationary <br />
                  Blue = Rotation <br />
                  Pink = Rotation + Interactive: User can hover mouse to change
                  colour + click to change colour.
                </p>
              </div>
              <div className="canvas-wrapper">
                <Canvas id="canvas" camera={{ fov: 100 }}>
                  <CameraUpdater cameraPosition={cameraPosition} />
                  <ambientLight intensity={1.2} />
                  <BoxGeometry />
                  <SpinningCube />
                  <InteractiveCube />
                  <OrbitControls
                    target={[0, 0, 0]}
                    minDistance={5}
                    maxDistance={20}
                    enablePan={false}
                  />
                </Canvas>
              </div>
            </>
          }
        />
        <Route
          path="/spheres"
          element={
            <>
              <div>
                <h3>Bouncing Sphere</h3>
              </div>
              <div className="canvas-wrapper">
                <Canvas id="canvas" camera={{ fov: 100 }}>
                  <CameraUpdater cameraPosition={cameraPosition} />
                  <ambientLight intensity={1.5} />
                  <BouncingSphere />
                  <SphereFloor />
                  <OrbitControls
                    target={[0, 0, 0]}
                    minDistance={5}
                    maxDistance={20}
                    enablePan={false}
                  />
                </Canvas>
              </div>
            </>
          }
        />
        <Route
          path="/textures"
          element={
            <>
              <div>
                <h3>Textures</h3>
              </div>
              <div className="canvas-wrapper">
                <Canvas id="canvas" camera={{ fov: 100 }}>
                  <CameraUpdater cameraPosition={cameraPosition} />
                  <ambientLight intensity={1.5} />
                  <pointLight position={[10, 10, 10]} />
                  <TexturedCube />
                  <OrbitControls
                    target={[0, 0, 0]}
                    minDistance={5}
                    maxDistance={15}
                    enablePan={false}
                  />
                </Canvas>
              </div>
            </>
          }
        />
        <Route
          path="*"
          element={<p>Page does not exist! Please enter a valid path.</p>}
        />
      </Routes>
    </main>
  );
};
export default App;
