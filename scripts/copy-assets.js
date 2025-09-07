import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs-extra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function copyAssets() {
  try {
    const srcDir = join(__dirname, '../src/assets/hacks');
    const destDir = join(__dirname, '../public/assets/hacks');
    
    // Ensure destination directory exists
    await fs.ensureDir(destDir);
    
    // Copy all files from src/assets/hacks to public/assets/hacks
    await fs.copy(srcDir, destDir, { overwrite: true });
    
    console.log('Successfully copied hack icons to public directory');
  } catch (err) {
    console.error('Error copying hack icons:', err);
    process.exit(1);
  }
}

copyAssets();
