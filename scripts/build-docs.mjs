/*
 * docs 产物组装：vuepress 构建完成后，把 demo 配置、资源与入口页复制到 docs/
 * （等价于历史 gulp 版本的 build-docs.js）
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const docsDir = path.join(repoRoot, 'docs');

function copy (from, to) {
    const src = path.join(repoRoot, from);
    if (!fs.existsSync(src)) {
        console.warn(`[build-docs] skip missing ${from}`);
        return;
    }
    fs.mkdirSync(path.dirname(to), {recursive: true});
    fs.cpSync(src, to, {recursive: true});
    console.log(`[build-docs] ${from} -> ${path.relative(repoRoot, to)}`);
}

copy('scripts/docs/config.js', path.join(docsDir, 'config.js'));
copy('vuepress/assets/readme', path.join(docsDir, 'assets/readme'));
copy('vuepress/assets/v1', path.join(docsDir, 'assets/v1'));
copy('vuepress/v1.html', path.join(docsDir, 'v1.html'));
copy('.gitignore', path.join(docsDir, '.gitignore'));

console.log('[build-docs] Finished.');
