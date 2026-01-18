import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export const createGlassCube = ({
    position = { x: 0, y: 0, z: 0 },
    size = { x: 1, y: 1, z: 1 },
    rotation = { x: 0, y: 0, z: 0 },
    radius = 0.15,
    smoothness = 8,
}) => {
    const geometry = new RoundedBoxGeometry(
        size.x,
        size.y,
        size.z,
        smoothness, // más alto = bordes más suaves
        radius // qué tan redondeado
    );

    // Material tipo vidrio
    const material = new THREE.MeshPhysicalMaterial({
        // color: 0xffffff,
        transmission: 1, // 🔑 transparencia real
        opacity: 1,
        metalness: 0,
        roughness: 0,
        ior: 1000, // índice de refracción (vidrio real)
        thickness: 0.5, // grosor del vidrio
        clearcoat: 1,
        clearcoatRoughness: 0,
        envMapIntensity: 1,
        // transparent: true,
    });

    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(position.x, position.y, position.z);
    cube.rotation.set(
        THREE.MathUtils.degToRad(rotation.x),
        THREE.MathUtils.degToRad(rotation.y),
        THREE.MathUtils.degToRad(rotation.z)
    );

    cube.castShadow = true;
    cube.receiveShadow = true;

    return cube;
};
