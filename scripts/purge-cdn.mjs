/*
 * 刷新 jsdelivr CDN 缓存（发布后使用）
 */
import https from 'node:https';

const list = [
    'cnchar',
    'cnchar-order', 'cnchar-poly', 'cnchar-trad', 'cnchar-draw', 'cnchar-idiom', 'cnchar-xhy', 'cnchar-radical',
    'cnchar-words', 'cnchar-explain', 'cnchar-voice', 'cnchar-random', 'cnchar-input', 'cnchar-code', 'cnchar-info', 'cnchar-name',
    'cnchar-all', 'hanzi-util', 'hanzi-util-base',
];

const getFileName = (name) => {
    if (name === 'hanzi-util-base') return 'hanzi.base';
    if (name === 'hanzi-util') return 'hanzi.util';
    return name.replace(/-/g, '.');
};

let num = 0;
const checkFinish = (name) => {
    num++;
    console.log(`${name} done.(${num}/${list.length})`);
    if (num >= list.length) console.log('Finished.');
};

for (const name of list) {
    https.get(`https://purge.jsdelivr.net/npm/${name}/${getFileName(name)}.min.js`, () => {
        checkFinish(name);
    });
}
