import * as THREE from "three";
import type { SceneSetup } from "./sceneSetup";

const baseRotation = {
	x: THREE.MathUtils.degToRad(-60),
	y: 0,
	z: THREE.MathUtils.degToRad(90),
};

export function startAnimation(
	{ scene, camera, renderer }: SceneSetup,
	group: THREE.Group,
): void {
	const raycaster = new THREE.Raycaster();
	const mouseNDC = new THREE.Vector2();
	const mouse = { x: 0, y: 0 };
	const slower = 0.02;
	let activeSection = "home";

	window.addEventListener("mousemove", (e) => {
		mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
		mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

		if (activeSection === "home" || activeSection === "footer") {
			mouseNDC.x = mouse.x;
			mouseNDC.y = mouse.y;
		}
	});

	function animate() {
		requestAnimationFrame(animate);

		const targetRotationY = baseRotation.y + mouse.x * 0.05;
		group.rotation.y = THREE.MathUtils.lerp(
			group.rotation.y,
			targetRotationY,
			0.05,
		);

		raycaster.setFromCamera(mouseNDC, camera);
		const intersects = raycaster.intersectObjects(group.children);

		group.children.forEach((child) => {
			const mesh = child as THREE.Mesh;
			const basePos: THREE.Vector3 = (mesh.userData as any).basePosition;
			if (basePos) {
				mesh.position.lerp(basePos, slower);
			}
		});

		if (intersects.length > 0) {
			let hovered = intersects[0].object;

			if (
				hovered.parent &&
				(hovered.parent.userData as any).basePosition
			) {
				hovered = hovered.parent;
			}

			const mesh = hovered as THREE.Mesh;
			const basePos: THREE.Vector3 = (mesh.userData as any).basePosition;
			if (basePos) {
				mesh.position.lerp(
					basePos.clone().add(new THREE.Vector3(0, 0, 1)),
					0.15,
				);
			}
		}

		if (activeSection === "home") {
			group.position.lerp(new THREE.Vector3(5.5, 0, 0), slower);
		}

		if (activeSection === "footer") {
			group.position.lerp(new THREE.Vector3(0.5, -4, 0), slower);
		}

		renderer.render(scene, camera);
	}

	animate();
}
