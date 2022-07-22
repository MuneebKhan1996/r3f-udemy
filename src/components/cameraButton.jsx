import { useState } from "react";
import { state } from "../state";

const style = {
  position: "absolute",
  zIndex: 1,
  bottom: "30vh",
  height: "30px",
  width: "30px",
  background: "rgb(255,255,255,0.5)",
  textAlign: "center",
  borderRadius: "100%",
  fontSize: "18px",
  fontWeight: "bold",
  border: "1px solid black",
  cursor: "pointer",
};

const CameraButtons = (props) => {
  const [currentCar, setCurrentCar] = useState(1);
  const sets = {
    1: {
      cameraPos: [7, 7, 7],
      target: [4, 1, 0],
      name: "object005_bod_0",
    },
    2: {
      cameraPos: [0, 7, 7],
      target: [0, 1, 0],
      name: "object001_Material009_0",
    },
    3: {
      cameraPos: [-7, 7, 7],
      target: [-4, 1, 0],
      name: "Capot001_CAR_PAINT_0",
    },
  };

  const handleClick = (e) => {
    state.cameraPos.set(...sets[e].cameraPos);
    state.activeMeshName = sets[e].name;
    state.target.set(...sets[e].target);
    state.shouldUpdate = true;
  };

  return (
    <>
      <button
        onClick={() => {
          if (currentCar < 3) {
            let value = currentCar + 1;
            setCurrentCar(value);
            handleClick(value);
          }
        }}
        style={{
          left: "40vw",
          ...style,
        }}
      >
        {"<"}
      </button>
      <button
        onClick={() => {
          if (currentCar > 1) {
            let value = currentCar - 1;
            setCurrentCar(value);
            handleClick(value);
          }
        }}
        style={{
          right: "40vw",
          ...style,
        }}
      >
        {">"}
      </button>
    </>
  );
};

export default CameraButtons;
