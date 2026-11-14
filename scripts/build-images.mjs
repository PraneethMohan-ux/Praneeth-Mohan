import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const sourcePath = `${OUT}/APM.png`;
const source = sharp(sourcePath).ensureAlpha().png();
const { width, height } = await source.metadata();
if (!width || !height) throw new Error(`Could not read the dimensions of ${sourcePath}`);

for (const targetWidth of [1100, 720, 420]) {
  await sharp(sourcePath)
    .resize({ width: targetWidth })
    .webp({ quality: 86, alphaQuality: 90 })
    .toFile(`${OUT}/portrait-${targetWidth}.webp`);
}

const sharePortrait = await sharp(sourcePath).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: sharePortrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="290" font-family="Impact, 'Arial Narrow', sans-serif" font-size="86" fill="#f4f1ec" letter-spacing="3">PRANEETH</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="3">PHARMACY • CLINICAL INFORMATICS • HEALTHTECH</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Praneeth portrait and social image built.');
