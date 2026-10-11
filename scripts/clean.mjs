/*
 * 清理构建产物、coverage 等
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {buildPackages, copies} from './packages.mjs';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const packagesDir = path.join(repoRoot, 'packages');

const removeList = [
    path.join(repoRoot, 'coverage'),
    path.join(repoRoot, 'playground/dist'),
];

for (const pkg of [...buildPackages, ...copies.map(c => ({dir: c.dir, file: c.file}))]) {
    removeList.push(path.join(packagesDir, pkg.dir, pkg.file));
}

for (const target of removeList) {
    if (fs.existsSync(target)) {
        fs.rmSync(target, {recursive: true, force: true});
        console.log(`[clean] removed ${path.relative(repoRoot, target)}`);
    }
}
console.log('[clean] Finished.');
