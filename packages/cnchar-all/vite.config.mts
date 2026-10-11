import path from 'node:path';
import {libConfig} from '../../scripts/vite-lib';
import {mainPackage, plugins} from '../../scripts/packages.mjs';

// cnchar-all 需要把主包与全部插件的源码打进同一个 UMD 包
const pkgDir = process.cwd();

const alias = [mainPackage, ...plugins].map((pkg) => ({
    find: pkg.name,
    replacement: path.resolve(pkgDir, '..', pkg.dir, 'src/index.ts'),
}));

export default libConfig({
    entry: 'src/index.ts',
    name: 'cncharAll',
    fileName: 'cnchar.all.min.js',
    alias,
});
