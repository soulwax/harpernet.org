// File: tools/make-og.cjs
// Node >=16, CommonJS. Install: npm i -D sharp

const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

const ARGS = process.argv.slice(2);
function hasFlag(name) {
  return ARGS.includes(`--${name}`);
}
function arg(name, fallback) {
  const i = ARGS.indexOf(`--${name}`);
  if (i !== -1 && ARGS[i + 1]) return ARGS[i + 1];
  return fallback;
}

// Standard: quadratisch
let W = 1200,
  H = 1200;
if (hasFlag('wide')) {
  W = 1200;
  H = 630; // Bannerformat
}

const inputSvgPath = arg('in', 'public/harp.svg');
const outPngPath = arg('out', hasFlag('wide') ? 'public/og-image-wide.png' : 'public/og-image.png');

const hueDeg = Number(arg('hue', '200')); // Farbverschiebung in Grad
const satMul = Number(arg('sat', '1.25')); // >1 = kräftigere Farben
const bgColor = arg('bg', '#0B0D16');

// Helper für Glow-Flächen
async function makeSolid(w, h, rgba) {
  return sharp({ create: { width: w, height: h, channels: 4, background: rgba } })
    .png()
    .toBuffer();
}

(async () => {
  if (!fs.existsSync(inputSvgPath)) {
    console.error(`Input SVG not found: ${inputSvgPath}`);
    process.exit(1);
  }

  // SVG rendern
  const svg = await fsp.readFile(inputSvgPath);
  const maxSize = Math.min(W, H) * 0.85;
  const svgRendered = await sharp(svg).resize(maxSize, maxSize, { fit: 'inside' }).toBuffer();

  // Farbmodulation
  const svgColored = await sharp(svgRendered)
    .modulate({ hue: ((hueDeg % 360) + 360) % 360, saturation: satMul })
    .toBuffer();

  // Basisfläche
  const base = sharp({ create: { width: W, height: H, channels: 4, background: bgColor } });

  // Glow-Effekte
  const glowA = await makeSolid(W, H, { r: 255, g: 0, b: 160, alpha: 0.25 });
  const glowB = await makeSolid(W, H, { r: 0, g: 220, b: 255, alpha: 0.2 });

  const out = await base
    .composite([
      { input: glowA, left: 0, top: 0 },
      { input: glowB, left: Math.round(W * 0.4), top: Math.round(H * 0.4) },
      {
        input: svgColored,
        left: Math.round((W - maxSize) / 2),
        top: Math.round((H - maxSize) / 2),
      },
    ])
    .png({ quality: 90 })
    .toBuffer();

  await fsp.writeFile(outPngPath, out);
  console.log(`OG image written: ${outPngPath} (${W}x${H})`);
})();
