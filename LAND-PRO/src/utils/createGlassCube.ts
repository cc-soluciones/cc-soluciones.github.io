import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { svgToTexture } from "@/utils/svgToTexture.js";

export const createGlassCube = ({
    position = { x: 0, y: 0, z: 0 },
    size = { x: 1, y: 1, z: 1 },
    rotation = { x: 0, y: 0, z: 0 },
    radius = 0.15,
    smoothness = 8,
    svg = null,
}) => {
    const geometry = new RoundedBoxGeometry(
        size.x,
        size.y,
        size.z,
        smoothness,
        radius,
    );

    const material = new THREE.MeshPhysicalMaterial({
        // color: 0xffffff,
        transmission: 1,
        opacity: 1,
        metalness: 0,
        roughness: 0,
        ior: 1000,
        thickness: 0.5,
        clearcoat: 1,
        clearcoatRoughness: 0,
        envMapIntensity: 1,
    });
    let materials = Array(6).fill(material);

    const cube = new THREE.Mesh(geometry, materials);

    if (svg) {
        const texture = svgToTexture(svg);

        const svgPlane = new THREE.Mesh(
            new THREE.PlaneGeometry(size.x * 0.7, size.y * 0.7),
            new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                depthTest: false,
                depthWrite: false,
                toneMapped: false,
            }),
        );

        svgPlane.position.z = size.z / 2 + 0.01;
        svgPlane.renderOrder = 10;
        cube.add(svgPlane);
    }

    cube.position.set(position.x, position.y, position.z);
    cube.rotation.set(
        THREE.MathUtils.degToRad(rotation.x),
        THREE.MathUtils.degToRad(rotation.y),
        THREE.MathUtils.degToRad(rotation.z),
    );

    cube.castShadow = true;
    cube.receiveShadow = true;

    return cube;
};
