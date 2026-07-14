import * as THREE from "three";
import { createGlassCube } from "@/lib/createGlassCube";

export function createCubeGrid(limit = 5, spacing = 1): THREE.Group {
	const group = new THREE.Group();
	const count = limit * limit;
	let positionY = 0;
	let positionX = 0;

	for (let i = 0; i < count; i++) {
		if (i % limit === 0) {
			positionY += spacing;
			positionX = 0;
		}

		const cube = createGlassCube({
			position: { x: positionX * spacing, y: positionY, z: 0 },
			size: { x: spacing, y: spacing, z: spacing },
			radius: 0.15,
		});

		positionX++;
		cube.userData.basePosition = cube.position.clone();
		group.add(cube);
	}

	group.rotation.set(
		THREE.MathUtils.degToRad(-5),
		0,
		THREE.MathUtils.degToRad(45),
	);
	group.position.set(5.5, 2, 0);

	return group;
}
