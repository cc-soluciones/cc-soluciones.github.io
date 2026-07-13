import * as THREE from "three";

export const svgToTexture = (svgString: string, size = 256) => {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    const scale = 0.85;
    const img = new Image();
    const svgBlob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, size, size);
        ctx.save();
        ctx.translate(size / 2, size / 2);
        ctx.rotate(Math.PI / 4);
        ctx.scale(scale, scale);
        ctx.drawImage(img, -size / 2, -size / 2, size, size);
        ctx.restore();
        
        texture.needsUpdate = true;
        URL.revokeObjectURL(url);
    };

    img.src = url;

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;

    return texture;
};
