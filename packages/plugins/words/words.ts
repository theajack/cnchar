/*
 * @Author: chenzhongsheng
 * @Date: 2022-10-09 09:18:54
 * @Description: Coding something
 */

import ICnChar from 'cnchar-types';
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
    const dict = json.dict;
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

export function getDict () {
    return {words: wordsDict};
}
    
export const words = ((word: string, ...args: string[]) => {
    if (_cnchar) {
        word = _cnchar._.checkTrad(word, args) as string;
    }
    return matchWords(word);
}) as IWords;

function matchWords (word: string) {
    try {
        // ! ios mac 不支持零宽断言
        const reg = new RegExp('(?<= )(\\S*?' + word + '\\S*?)(?= )', 'g');
        const results = wordsDict.match(reg);
        return results || [];
    } catch (e) {
        const reg = new RegExp(' ?(\\S*' + word + '\\S*) ?', 'g');
        const results = wordsDict.match(reg);
        return (results || []).map(r => r.trim());
    }
}

export function addWords (words: string | string[]) {
    if (words instanceof Array) {
        words = words.join('');
    }
    wordsDict += `${words.trim()} `;
};