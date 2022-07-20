import * as THREE from 'three';

const ColorPicker = (props) => {
	const handleColorSelect = (e) => {
		if (!window.activeMesh) return null;
		window.activeMesh.material.color = new THREE.Color(
			e.target.style.background
		);
	};
	return (
		<div style={{ position: 'absolute', zIndex: 1 }}>
			<div
				onClick={handleColorSelect}
				style={{ background: 'red', height: '50px', width: '50px' }}
			></div>
			<div
				onClick={handleColorSelect}
				style={{ background: 'blue', height: '50px', width: '50px' }}
			></div>
			<div
				onClick={handleColorSelect}
				style={{ background: 'green', height: '50px', width: '50px' }}
			></div>
		</div>
	);
};

export default ColorPicker;