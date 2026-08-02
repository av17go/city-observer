import { readdirSync, copyFileSync } from 'fs';
import { join } from 'path';

const srcDir = 'images';
const destDir = 'src/assets/footer';

const files = readdirSync(srcDir)
  .filter((f) => f.toLowerCase().endsWith('.webp'))
  .sort();

files.forEach((file, i) => {
  copyFileSync(join(srcDir, file), join(destDir, `${i + 1}.webp`));
});

console.log(`Copied ${files.length} webp file(s) to ${destDir}`);
