/*
 * 构建后处理：
 *   1. 生成 hanzi-util / hanzi-util-base 的产物（由 cnchar-all / cnchar 复制而来）
 *   2. 将根目录 README.md 与 LICENSE 复制到每个包目录，便于 npm 发布
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {buildPackages, copies, allPublishDirs} from './packages.mjs';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const packagesDir = path.join(repoRoot, 'packages');

function copyFile (from, to) {
    fs.copyFileSync(from, to);
    console.log(`[post-build] ${path.relative(repoRoot, from)} -> ${path.relative(repoRoot, to)}`);
}

// 1. hanzi-util / hanzi-util-base
for (const item of copies) {
    const from = path.join(packagesDir, item.from);
    const to = path.join(packagesDir, item.dir, item.file);
    if (!fs.existsSync(from)) {
        console.warn(`[post-build] skip ${item.from} (not found)`);
        continue;
    }
    copyFile(from, to);
}

// 2. README / LICENSE
const readme = path.join(repoRoot, 'README.md');
const license = path.join(repoRoot, 'LICENSE');
for (const dir of allPublishDirs) {
    const targetDir = path.join(packagesDir, dir);
    if (!fs.existsSync(targetDir)) continue;
    if (fs.existsSync(readme)) copyFile(readme, path.join(targetDir, 'README.md'));
    if (fs.existsSync(license)) copyFile(license, path.join(targetDir, 'LICENSE'));
}

// 3. 校验所有构建产物存在
let missing = 0;
for (const pkg of buildPackages) {
    const file = path.join(packagesDir, pkg.dir, pkg.file);
    if (!fs.existsSync(file)) {
        console.warn(`[post-build] missing build output: ${path.relative(repoRoot, file)}`);
        missing++;
    }
}
if (missing > 0) {
    process.exitCode = 1;
} else {
    console.log('[post-build] Finished.');
}
