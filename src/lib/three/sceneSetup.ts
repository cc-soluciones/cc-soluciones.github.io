import * as THREE from "three";

export interface SceneSetup {
	scene: THREE.Scene;
	camera: THREE.PerspectiveCamera;
	renderer: THREE.WebGLRenderer;
}

export function setupScene(container: HTMLElement): SceneSetup {
	const width = container.clientWidth || window.innerWidth;
	const height = container.clientHeight || window.innerHeight;
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
	const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);

	camera.position.set(0, 3, 8);
	renderer.setSize(width, height);
	renderer.setPixelRatio(window.devicePixelRatio);
	container.appendChild(renderer.domElement);
	dirLight.position.set(5, 10, 5);
	dirLight.castShadow = true;
	scene.add(ambientLight);
	scene.add(dirLight);

	window.addEventListener("resize", () => {
		const w = container.clientWidth || window.innerWidth;
		const h = container.clientHeight || window.innerHeight;
		camera.aspect = w / h;
		camera.updateProjectionMatrix();
		renderer.setSize(w, h);
	});

	return { scene, camera, renderer };
}
