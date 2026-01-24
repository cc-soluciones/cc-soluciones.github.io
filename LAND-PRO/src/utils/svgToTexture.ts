import * as THREE from "three";

export const svgToTexture = (svgString : any, size = 256) => {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx : any= canvas.getContext("2d");

    // ctx.fillStyle = "white";
    // ctx.fillRect(0, 0, size, size);

    const img = new Image();
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
        ctx.drawImage(img, 0, 0, size, size);
        URL.revokeObjectURL(url);
        texture.needsUpdate = true;
    };

    img.src = url;

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;

    return texture;
}
