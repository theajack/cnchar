import path from 'node:path';
import {defineConfig} from 'vite';
import {cncharTypesStub} from '../scripts/vite-lib';
import {mainPackage, plugins} from '../scripts/packages.mjs';

const repoRoot = path.resolve(process.cwd(), '..');

// 开发时直接引用各子包源码，获得 HMR 与完整调试体验
const alias = [mainPackage, ...plugins].map((pkg) => ({
    find: pkg.name,
    replacement: path.resolve(repoRoot, 'packages', pkg.dir, 'src/index.ts'),
}));

export default defineConfig({
    resolve: {alias},
    server: {
        port: 8099,
        open: '/index.html',
    },
    plugins: [cncharTypesStub()],
});
