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
import Draggable from "./components/draggable";
import { Physics } from "@react-three/cannon";
import Model from "./components/model";
import BoundingBox from "./components/boundingBox";
extend({ OrbitControls });

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <Canvas
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
        shadows
      >
        <ambientLight intensity={0.2} />
        <Orbit />
        <axesHelper args={[5]} />
        <Bulb position={[0, 3, 0]} />
        <Physics>
          <Suspense fallback={null}>
            <Draggable transformGroup>
              <BoundingBox
                position={[4, 1, 0]}
                dims={[1, 1, 2]}
                offset={[0, -0.38, 0.2]}
              >
                <Model
                  path="/tesla_model_s/scene.gltf"
                  scale={new Array(3).fill(0.3)}
                />
              </BoundingBox>
            </Draggable>
            <Draggable transformGroup>
              <BoundingBox
                position={[0, 1, 0]}
                dims={[1, 1, 3]}
                offset={[0, 0.15, 0]}
              >
                <Model
                  path="/tesla_cybertruck/scene.gltf"
                  scale={new Array(3).fill(0.005)}
                />
              </BoundingBox>
            </Draggable>
            <Draggable transformGroup>
              <BoundingBox
                position={[-4, 1, 0]}
                dims={[2, 1, 3]}
                offset={[0, -0.2, 0.2]}
              >
                <Model
                  path="/tesla_model_3/scene.gltf"
                  scale={new Array(3).fill(0.005)}
                />
              </BoundingBox>
            </Draggable>
          </Suspense>
          <Suspense fallback={null}>
            <Box position={[-4, 8, -4]} />
          </Suspense>
          <Suspense fallback={null}>
            <Box position={[-4, 4, -4]} />
          </Suspense>
          <Suspense fallback={null}>
            <Background />
          </Suspense>
          <Floor position={[0, -0.5, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
