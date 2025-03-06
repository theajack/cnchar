/*
 * @Author: chenzhongsheng
 * @Date: 2024-10-10 19:56:55
 * @Description: Coding something
 */
import fs from 'fs-extra';
import { execSync } from 'node:child_process';
import path from 'node:path';

const packages = fs.readdirSync(
    path.resolve(__dirname, '../packages')
);

console.log(packages);
for (const name of packages) {
    execSync(`npx vite build -m=sdk_${name}`);

    execSync(concatDts([
        `packages/${name}/dist/index.d.ts`,
        `packages/${name}/src/index.ts`,
    ]));
}

function concatDts (io) {
    return [
        'npx dts-bundle-generator -o',
        ...io,
        '--no-check',
        '--no-banner',
        '--external-inlines',
        '', // 合并第三方包的dts信息
    ].join(' ');
}