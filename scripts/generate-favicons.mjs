import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

// Meleph brand palette
// Ink Navy: #0D1B2A
// Warm Ivory: #FAF8F3
// Muted Gold: #C9A968

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="melephBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D1B2A" />
      <stop offset="100%" stop-color="#060E17" />
    </linearGradient>
    <linearGradient id="goldDot" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E8CE96" />
      <stop offset="100%" stop-color="#C9A968" />
    </linearGradient>
    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Architectural Squircle Base -->
  <rect width="512" height="512" rx="116" fill="url(#melephBg)" />
  <rect x="10" y="10" width="492" height="492" rx="108" fill="none" stroke="#C9A968" stroke-opacity="0.28" stroke-width="6" />

  <!-- High-Contrast Serif 'M' Letterform -->
  <g fill="#FAF8F3">
    <!-- Left Stem & Serifs -->
    <path d="
      M 112 376
      L 112 362
      C 134 360 144 350 144 326
      L 144 186
      C 144 162 134 152 112 150
      L 112 136
      L 194 136
      L 194 150
      C 172 152 162 162 162 186
      L 162 326
      C 162 350 172 360 194 362
      L 194 376
      Z
    " />

    <!-- Center Diagonal Apex & V-cut -->
    <path d="
      M 176 170
      L 256 348
      L 336 170
      L 358 170
      L 272 376
      L 240 376
      L 154 170
      Z
    " />

    <!-- Right Stem & Serifs -->
    <path d="
      M 318 376
      L 318 362
      C 340 360 350 350 350 326
      L 350 186
      C 350 162 340 152 318 150
      L 318 136
      L 400 136
      L 400 150
      C 378 152 368 162 368 186
      L 368 326
      C 368 350 378 360 400 362
      L 400 376
      Z
    " />
  </g>

  <!-- Muted Gold Intelligence Pulse (Mel System Active) -->
  <circle cx="410" cy="102" r="26" fill="url(#goldDot)" filter="url(#subtleGlow)" />
  <circle cx="410" cy="102" r="12" fill="#FFF2D6" />
</svg>`;

async function generate() {
  console.log("Generating Meleph favicons and brand assets...");

  const svgBuffer = Buffer.from(svgContent);

  // 1. Save SVG files
  fs.writeFileSync("public/favicon.svg", svgContent);
  fs.writeFileSync("src/app/icon.svg", svgContent);
  console.log("✓ Saved public/favicon.svg and src/app/icon.svg");

  // 2. Generate PNG sizes
  const sizes = [16, 32, 48, 64, 180, 192, 512];
  const pngBuffers = {};

  for (const size of sizes) {
    const buf = await sharp(svgBuffer)
      .resize(size, size, { fit: "contain" })
      .png({ compressionLevel: 9 })
      .toBuffer();
    pngBuffers[size] = buf;
  }

  // Save Apple Touch Icon (180x180) & general PNG icons
  fs.writeFileSync("public/apple-touch-icon.png", pngBuffers[180]);
  fs.writeFileSync("src/app/apple-icon.png", pngBuffers[180]);
  fs.writeFileSync("public/icon-192.png", pngBuffers[192]);
  fs.writeFileSync("public/icon-512.png", pngBuffers[512]);
  fs.writeFileSync("src/app/icon.png", pngBuffers[32]);
  console.log("✓ Saved PNG icons (32px, 180px, 192px, 512px)");

  // 3. Build a multi-resolution Windows/Browser .ico container (16x16, 32x32, 48x48)
  const icoSizes = [16, 32, 48];
  const icoImages = icoSizes.map((s) => ({
    width: s,
    height: s,
    buffer: pngBuffers[s],
  }));

  const icoBuffer = createIco(icoImages);
  fs.writeFileSync("public/favicon.ico", icoBuffer);
  fs.writeFileSync("src/app/favicon.ico", icoBuffer);
  console.log("✓ Generated valid multi-resolution favicon.ico for public/ and src/app/");

  console.log("All favicons successfully generated!");
}

/**
 * Creates a valid ICO file container containing PNG images.
 */
function createIco(images) {
  // ICO Header: 6 bytes
  // Reserved (2), Type (2 = 1 for icon), Count (2)
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  // Each directory entry: 16 bytes
  const dirEntrySize = 16;
  const entries = [];
  let offset = 6 + count * dirEntrySize;

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0); // width
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1); // height
    entry.writeUInt8(0, 2); // color palette count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset

    entries.push(entry);
    offset += img.buffer.length;
  }

  const allBuffers = [header, ...entries, ...images.map((img) => img.buffer)];
  return Buffer.concat(allBuffers);
}

generate().catch(console.error);
