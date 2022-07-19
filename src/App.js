//@ts-check
import './App.css';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
extend({ OrbitControls });

const Orbit = () => {
	const { camera, gl } = useThree();
	return <orbitControls args={[camera, gl.domElement]} />;
};

const Box = (props) => {
	const ref = useRef();

	useFrame((state) => {
		ref.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={ref} {...props} castShadow receiveShadow>
			<boxGeometry />
			<meshStandardMaterial color={'red'} opacity={0.5} transparent />
		</mesh>
	);
};

const Floor = (props) => {
	return (
		<mesh {...props} receiveShadow>
			<boxBufferGeometry args={[10, 0.1, 10]} />
			<meshPhysicalMaterial />
		</mesh>
	);
};

const Bulb = (props) => {
	return (
		<mesh {...props}>
			<pointLight castShadow />
			<sphereBufferGeometry args={[0.5, 20, 20]} />
			<meshPhongMaterial emissive={'yellow'} />
		</mesh>
	);
};

function App() {
	const points = [];
	points.push(new THREE.Vector3(-1, 0, 0));
	points.push(new THREE.Vector3(0, 1, 0));
	points.push(new THREE.Vector3(1, 0, 0));
	points.push(new THREE.Vector3(0, 5, 0));

	const geometry = new THREE.BufferGeometry().setFromPoints(points);

	return (
		<div style={{ height: '100vh', width: '100vw' }}>
			<Canvas
				style={{ background: 'black' }}
				camera={{ position: [1, 3, 1] }}
				shadows
			>
				<fog attach='fog' args={['white', 1, 10]} />
				<ambientLight intensity={0.2} />
				<Box position={[0, 1, 0]} />
				<Bulb position={[0, 3, 0]} />
				<Orbit />
				<axesHelper args={[5]} />
				<Floor position={[0, -0.5, 0]} />
			</Canvas>
		</div>
	);
}

export default App;
