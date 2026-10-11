/*
 * 按依赖顺序发布全部包
 * 用法：
 *   node ./scripts/publish.mjs            # 发布全部
 *   node ./scripts/publish.mjs cnchar xhy # 只发布指定包（cnchar / cnchar-poly / cnchar-all / cnchar-types / ...）
 */
import {execSync} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {mainPackage, plugins, allPackage, copies} from './packages.mjs';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');

const ordered = [
    'cnchar-types',
    mainPackage.dir,
    ...plugins.map((p) => p.dir),
    allPackage.dir,
    ...copies.map((c) => c.dir),
];

const args = process.argv.slice(2).map((a) => (a.startsWith('cnchar-') ? a : `cnchar-${a}`));
const targets = args.length
    ? ordered.filter((dir) => args.includes(dir) || (dir === 'cnchar' && args.includes('cnchar')))
    : ordered;

console.log(`Start Publish... [0/${targets.length}]`);
const failed = [];
let i = 0;
for (const dir of targets) {
    i++;
    try {
        execSync('pnpm publish --access public --no-git-checks', {
            cwd: path.join(repoRoot, 'packages', dir),
            stdio: 'inherit',
        });
        console.log(`${dir} publish success. [${i}/${targets.length}]`);
    } catch (e) {
        failed.push(dir);
        console.error(`${dir} publish failed. [${i}/${targets.length}]`);
    }
}

if (failed.length) {
    console.error(`Failed packages: ${failed.join(', ')}`);
    process.exitCode = 1;
} else {
    console.log('All packages published.');
}
