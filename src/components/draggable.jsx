import { useEffect, useRef, useState } from "react";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { extend, useThree } from "@react-three/fiber";
extend({ DragControls });

const Draggable = (props) => {
  const [children, setChildren] = useState([]);
  const groupRef = useRef();
  const controlRef = useRef();
  const { camera, gl, scene } = useThree();

  useEffect(() => {
    setChildren(groupRef.current.children);
  }, []);

  useEffect(() => {
    controlRef.current.addEventListener("hoveron", (e) => {
      scene.orbitControls.enabled = false;
    });
    controlRef.current.addEventListener("hoveroff", (e) => {
      scene.orbitControls.enabled = true;
    });
    controlRef.current.addEventListener("dragstart", (e) => {
      e.object.api?.mass.set(0);
      console.log(e.object);
    });
    controlRef.current.addEventListener("dragend", (e) => {
      e.object.api?.mass.set(1);
    });
    controlRef.current.addEventListener("drag", (e) => {
      e.object.api?.position.copy(e.object.position);
      e.object.api?.velocity.set(0, 0, 0);
    });
  }, [children]);

  return (
    <group ref={groupRef}>
      <dragControls
        transformGroup={props.transformGroup}
        ref={controlRef}
        args={[children, camera, gl.domElement]}
      />
      {props.children}
    </group>
  );
};

export default Draggable;
