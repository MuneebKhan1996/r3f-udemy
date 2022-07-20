import './App.css';
import { Canvas, extend } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Box from './components/box';
import Background from './components/background';
import Bulb from './components/bulb';
import Orbit from './components/orbit';
import Floor from './components/floor';
import ColorPicker from './components/colorPicker';
import Dragable from './components/dragable';
import { Physics } from '@react-three/cannon';
import Model from './components/model';
extend({ OrbitControls });

function App() {
	return (
		<div style={{ height: '100vh', width: '100vw' }}>
			<ColorPicker />
			<Canvas
				style={{ background: 'black' }}
				camera={{ position: [7, 7, 7] }}
				shadows
			>
				<ambientLight intensity={0.2} />
				<Orbit />
				<axesHelper args={[5]} />
				<Physics>
					<Dragable>
						<Bulb position={[0, 3, 0]} />
						<Suspense fallback={null}>
							<Model
								path='/tesla_model_s/scene.gltf'
								scale={new Array(3).fill(0.3)}
								position={[4, 0, 0]}
							/>
							<Model
								path='/tesla_cybertruck/scene.gltf'
								scale={new Array(3).fill(0.005)}
								position={[0, 0.2, 0]}
							/>
							<Model
								path='/tesla_model_3/scene.gltf'
								scale={new Array(3).fill(0.005)}
								position={[-4, 0, 0]}
							/>
						</Suspense>
						<Suspense fallback={null}>
							<Box position={[-4, 8, -4]} />
						</Suspense>
						<Suspense fallback={null}>
							<Box position={[-4, 4, -4]} />
						</Suspense>
					</Dragable>
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
