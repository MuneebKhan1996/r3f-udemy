import { extend, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { useMemo } from 'react';
extend({ OrbitControls });

const Background = (props) => {
	const texture = useLoader(TextureLoader, '/autoshop.jpeg');
	const { gl } = useThree();

	const formated = useMemo(
		() =>
			new THREE.WebGLCubeRenderTarget(
				texture.image.height
			).fromEquirectangularTexture(gl, texture),
		[]
	);

	return <primitive attach='background' object={formated} />;
};

export default Background;
