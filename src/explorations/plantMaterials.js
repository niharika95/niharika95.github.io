import * as THREE from "three";

const noise = (n) => {
  const value = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
};

// Generated once per plant; no texture downloads or per-frame painting.
export function makePlantTextures() {
  const leafCanvas = document.createElement("canvas");
  leafCanvas.width = 256;
  leafCanvas.height = 512;
  const ctx = leafCanvas.getContext("2d");
  const pixels = ctx.createImageData(256, 512);
  for (let y = 0; y < 512; y++) {
    for (let x = 0; x < 256; x++) {
      const i = (y * 256 + x) * 4;
      const grain = noise(x + y * 256);
      const mottling = Math.sin(x * 0.07 + Math.sin(y * 0.029) * 2) * 5;
      const value = 207 + grain * 18 + mottling;
      pixels.data.set([value, value + 4, value - 3, 255], i);
    }
  }
  ctx.putImageData(pixels, 0, 0);
  for (let row = 0; row < 13; row++) {
    const start = 477 - row * 33;
    for (const side of [-1, 1]) {
      // Secondary veins fan toward the tip; finer branches soften the pattern.
      ctx.beginPath();
      ctx.moveTo(128, start);
      ctx.bezierCurveTo(
        128 + side * 31,
        start - 14,
        128 + side * 74,
        start - 66,
        128 + side * 130,
        start - 92,
      );
      ctx.strokeStyle = "rgba(244, 249, 218, .42)";
      ctx.lineWidth = 1.6;
      ctx.stroke();
      for (let branch = 1; branch <= 4; branch++) {
        const x = 128 + side * branch * 24;
        const y = start - branch * 17;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.quadraticCurveTo(x + side * 9, y - 14, x + side * 21, y - 31);
        ctx.strokeStyle = "rgba(239, 246, 218, .16)";
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
    }
  }
  const leaf = new THREE.CanvasTexture(leafCanvas);
  leaf.colorSpace = THREE.SRGBColorSpace;
  leaf.anisotropy = 4;
  const leafBump = leaf.clone();
  leafBump.colorSpace = THREE.NoColorSpace;

  const clayCanvas = document.createElement("canvas");
  clayCanvas.width = clayCanvas.height = 256;
  const clayCtx = clayCanvas.getContext("2d");
  const clayPixels = clayCtx.createImageData(256, 256);
  for (let y = 0; y < 256; y++) {
    for (let x = 0; x < 256; x++) {
      const grain = noise(x * 1.7 + y * 256);
      const rings = Math.sin(y * 1.7) * 4;
      const patina = Math.sin(x * 0.035 + y * 0.019) * 9;
      const value = grain * 22 + rings + patina;
      clayPixels.data.set(
        [186 + value, 121 + value * 0.8, 83 + value * 0.7, 255],
        (y * 256 + x) * 4,
      );
    }
  }
  clayCtx.putImageData(clayPixels, 0, 0);
  const clay = new THREE.CanvasTexture(clayCanvas);
  clay.colorSpace = THREE.SRGBColorSpace;
  clay.wrapS = THREE.RepeatWrapping;
  clay.repeat.set(2, 1);
  const clayBump = clay.clone();
  clayBump.colorSpace = THREE.NoColorSpace;
  return { leaf, leafBump, clay, clayBump };
}
