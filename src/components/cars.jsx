import Draggable from "./draggable";
import Model from "./model";
import BoundingBox from "./boundingBox";

const Cars = (props) => {
  return (
    <>
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
      <Draggable>
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
      <BoundingBox
        position={[-2, 0, 0]}
        dims={[2, 1, 3]}
        offset={[0, -0.2, 0.2]}
      >
        <group rotation={[0, Math.PI, 0]}>
          <Model path="/mech_drone/scene.gltf" scale={new Array(3).fill(2)} />
        </group>
      </BoundingBox>
    </>
  );
};

export default Cars;
