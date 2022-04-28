
import ICnChar from 'cnchar-types';
import {decompressFromBase64} from 'lz-string';
import {Json} from 'cnchar-types/main/common';
import {IWords} from 'cnchar-types/plugin/words';
import json from './dict/cnchar-words.json';

export const args: Json = {
    trad: 'trad',
};

let _cnchar: ICnChar;
export function setCnchar (cnchar: ICnChar) {
    _cnchar = cnchar;
}

function decodeDict () {
    const dict = decompressFromBase64(json.dict);
    if (!dict) return '';
    const n = dict.length;
    let newDict = '';
    let key = '';
    for (let i = 0; i < n; i++) {
        const v = dict[i];
        if (v === ' ') {
            key = '';
            newDict += ' ';
            continue;
        }
        if (v === ',') {
            newDict += (' ' + key);
            continue;
        }
        if (!key) {
            key = v;
        }
        newDict += v;
    }
    return newDict;
}

let wordsDict = decodeDict();
    
export const words = ((word: string, ...args: string[]) => {
    if (_cnchar) {
        word = _cnchar._.checkTrad(word, args) as string;
    }
    const reg = buildMatchRegExp(word);
    const results = wordsDict.match(reg);
    return results || [];
}) as IWords;
    
function buildMatchRegExp (word: string) {
    return new RegExp('(?<= )(\\S*?' + word + '\\S*?)(?= )', 'g');
}

export function addWords (words: string | string[]) {
    if (words instanceof Array) {
        words = words.join('');
    }
    wordsDict += `${words.trim()} `;
};