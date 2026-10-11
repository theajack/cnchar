import path from 'node:path';
import {defineConfig} from 'vitest/config';
import {cncharTypesStub} from './scripts/vite-lib';

const pkg = (name: string) => path.resolve(__dirname, `packages/${name}/src/index.ts`);

export default defineConfig({
    resolve: {
        alias: [
            {find: 'testUtils', replacement: path.resolve(__dirname, 'test-utils/index.ts')},
            {find: 'cnchar', replacement: pkg('cnchar')},
            {find: /^cnchar-(.+)$/, replacement: path.resolve(__dirname, 'packages/cnchar-$1/src/index.ts')},
        ],
    },
    plugins: [cncharTypesStub()],
    test: {
        globals: true,
        environment: 'jsdom',
        environmentOptions: {
            jsdom: {
                userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
            },
        },
        include: ['packages/*/src/__tests__/**/*.spec.ts'],
        coverage: {
            provider: 'v8',
            reportsDirectory: './coverage',
            include: ['packages/*/src/**/*.ts'],
            exclude: ['packages/*/src/**/*.d.ts', 'packages/*/src/__tests__/**'],
        },
    },
});
