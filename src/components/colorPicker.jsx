import * as THREE from "three";
import { state } from "../state";

const ColorPicker = (props) => {
  const handleColorSelect = (e) => {
    if (!state.activeMesh) return null;
    state.activeMesh.material.color = new THREE.Color(
      e.target.style.background
    );
  };
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        left: 0,
        right: 0,
        top: 5,
        margin: "auto",
        display: "flex",
        width: "fit-content",
      }}
    >
      <div
        onClick={handleColorSelect}
        style={{ background: "red", height: "50px", width: "50px" }}
      ></div>
      <div
        onClick={handleColorSelect}
        style={{ background: "blue", height: "50px", width: "50px" }}
      ></div>
      <div
        onClick={handleColorSelect}
        style={{ background: "green", height: "50px", width: "50px" }}
      ></div>
    </div>
  );
};

export default ColorPicker;
