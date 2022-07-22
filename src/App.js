import "./App.css";
import { Canvas, extend } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Box from "./components/box";
import Background from "./components/background";
import Bulb from "./components/bulb";
import Orbit from "./components/orbit";
import Floor from "./components/floor";
import ColorPicker from "./components/colorPicker";
import { Physics } from "@react-three/cannon";
import Cars from "./components/cars";
import CameraControls from "./components/cameraControls";
import CameraButtons from "./components/cameraButton";
extend({ OrbitControls });

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
        shadows
      >
        <CameraControls />
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[6, 3, 0]}
          intensity={2}
          castShadow
          shadow-mapSize-height={2 ** 8}
          shadow-mapSize-width={2 ** 8}
        />
        <Orbit />
        <axesHelper args={[5]} />
        <Bulb position={[3.5, 2, 0]} />
        <Bulb position={[0, 2, 0]} />
        <Bulb position={[-3.5, 2, 0]} />
        <Physics>
          <Suspense fallback={null}>
            <Cars />
          </Suspense>
          <Suspense fallback={null}>
            <Box position={[-4, 8, -4]} />
          </Suspense>
          <Suspense fallback={null}>
            <Box position={[-4, 4, -4]} />
          </Suspense>
          <Floor position={[0, -0.5, 0]} />
        </Physics>
        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
