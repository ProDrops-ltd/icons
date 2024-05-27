import glob from 'fast-glob';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const flattenOutDir = 'temp/flatten-output';

async function flattenAll() {
  const GLOB = 'svg/huge-icon/**/*.svg';
  const svgFiles = await glob(GLOB, { ignore: 'node_modules/**' });
  for (const file of svgFiles) {
    const newpath = file.split('/');
    newpath.shift();
    const newFilename = newpath.join('__').replace(',', '');
    fs.mkdirSync(flattenOutDir, { recursive: true });
    fs.writeFileSync(path.join(flattenOutDir, newFilename), fs.readFileSync(file, 'utf-8'), { encoding: 'utf-8' });
  }
  const output = await glob(`${flattenOutDir}/**/*.svg`, { ignore: 'node_modules/**' });
  console.log(svgFiles.length, output.length);
}

async function svgr() {
  execSync('yarn svgr', { stdio: 'inherit' });
}

function cleanupIndex() {
  const indexFile = fs.readFileSync('temp/svgr-output/index.ts', 'utf-8');
  const lines = indexFile.split('\n');
  const newLines = new Set(lines);
  fs.writeFileSync('temp/svgr-output/index.ts', [...newLines].join('\n'), { encoding: 'utf-8' });
}

function compileTypes() {
  execSync('yarn tsc', { stdio: 'inherit' });
}

function cleanup() {
  fs.rmSync('temp', { recursive: true });
}

flattenAll().then(svgr).then(cleanupIndex).then(compileTypes).catch(console.error).finally(cleanup);
