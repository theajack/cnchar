/*
 * 由 packages/cnchar/package.json 的 version 生成 packages/cnchar/src/version.ts
 * 等价于历史 webpack-config/build.js 中的 version 写入逻辑。
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');

const pkgPath = path.join(repoRoot, 'packages/cnchar/package.json');
const {version} = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

const target = path.join(repoRoot, 'packages/cnchar/src/version.ts');
fs.writeFileSync(target, `export default '${version}';\n`, 'utf8');
console.log(`[gen-version] packages/cnchar/src/version.ts => ${version}`);
