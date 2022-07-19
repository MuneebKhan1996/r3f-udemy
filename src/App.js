//@ts-check
import './App.css';
import {
	Canvas,
	useFrame,
	extend,
	useThree,
	useLoader,
} from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import { TextureLoader } from 'three';
extend({ OrbitControls });

const Orbit = () => {
	const { camera, gl } = useThree();
	return <orbitControls args={[camera, gl.domElement]} />;
};

const Box = (props) => {
	const ref = useRef();
	const texture = useLoader(TextureLoader, '/csteel.jpg');

	useFrame((state) => {
		ref.current.rotation.x += 0.01;
		ref.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={ref} {...props} castShadow>
			<boxGeometry />
			<meshPhysicalMaterial map={texture} />
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

const Background = (props) => {
	const texture = useLoader(TextureLoader, '/autoshop.jpeg');
	const { gl } = useThree();

	const formated = new THREE.WebGLCubeRenderTarget(
		texture.image.height
	).fromEquirectangularTexture(gl, texture);

	return <primitive attach='background' object={formated} />;
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
	return (
		<div style={{ height: '100vh', width: '100vw' }}>
			<Canvas
				style={{ background: 'black' }}
				camera={{ position: [1, 3, 1] }}
				shadows
			>
				<ambientLight intensity={0.2} />
				<Suspense fallback={null}>
					<Box position={[0, 1, 0]} />
				</Suspense>
				<Suspense fallback={null}>
					<Background />
				</Suspense>
				<Bulb position={[0, 3, 0]} />
				<Orbit />
				<axesHelper args={[5]} />
				<Floor position={[0, -0.5, 0]} />
			</Canvas>
		</div>
	);
}

export default App;
