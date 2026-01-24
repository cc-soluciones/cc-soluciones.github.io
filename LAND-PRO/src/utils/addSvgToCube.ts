import * as THREE from "three";

export const addSvgToCube = (cube : any, texture : any, scale = 0.6) => {
    const planeGeo = new THREE.PlaneGeometry(scale, scale);

    const planeMat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
    });

    const plane = new THREE.Mesh(planeGeo, planeMat);

    plane.position.z = 0.51;

    cube.add(plane);

    return plane;
}
