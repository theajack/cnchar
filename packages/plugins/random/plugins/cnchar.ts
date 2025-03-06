/*
 * @Author: tackchen
 * @Date: 2022-05-15 17:33:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-02 10:55:40
 * @FilePath: /cnchar/src/cnchar/main/utils/random.ts
 * @Description: Coding something
 */

import {IFunc} from 'cnchar-types/main/tool';
import {ToneType} from 'cnchar-types/main';
import {Json} from 'cnchar-types/main/common';
import {pickRandomChar, pickRandomEle, randomNum} from '@common/util';
import {IRandomSpellOptions, IRandomWordOptions} from 'cnchar-types/plugin/random';
import {getCnChar, getPlugin} from '../store';

let spellMap: Json<{
    toneIndex: number,
    tones: ToneType[],
}>;

export function initSpellMap (spellDict: Json<string>) {
    const TONES: ToneType[] = [0, 1, 2, 3, 4];
    const map: Json<{
        toneIndex: number,
        tones: ToneType[],
    }> = {};
    for (const k in spellDict) {
        let str = spellDict[k];
        const toneIndex = parseInt(str[0]);

        str = str.substring(2);

        const tones: ToneType[] = [];
        TONES.forEach((tone) => {
            if (str.indexOf(`${tone}`) !== -1 || str.indexOf(`${tone + 5}`) !== -1) {
                tones.push(tone);
            }
        });
        map[k] = {toneIndex, tones};
    }
    spellMap = map;
};

export const randomSpell: IFunc<string[], IRandomSpellOptions> = ({
    number = 1,
    tone = false,
    flat = false,
} = {}) => {
    const cnchar = getCnChar();
    if (!cnchar) {
        console.warn('cnchar is not init');
        return [];
    }
    const keys = Object.keys(spellMap);
    const spells = pickRandomEle(keys, number);
    if (!tone) {
        return spells;
    }
    return spells.map((spell) => {
        const tones = spellMap[spell].tones;
        const toneValue = tones[randomNum(0, tones.length)];
        if (flat) {
            return `${spell}${toneValue}`;
        } else {
            return cnchar._.setTone(spell, spellMap[spell].toneIndex, toneValue);
        }
    });
};

let AllWords: string[] = [];
let AllTradWords: string[] = [];

export const randomWord: IFunc<string, IRandomWordOptions> = ({
    number = 1,
    stroke,
    trad = false
} = {}) => {
    const cnchar = getCnChar();
    if (!cnchar) {
        console.warn('cnchar is not init');
        return '';
    }

    let words: string[] | null = null; // 所有的汉字
    let dict: Json | null = null; // {count: words} 笔画数：汉字 map

    if (trad) {
        const plugin = getPlugin('trad');
        if (plugin && plugin.dict) {
            dict = plugin.dict.count as Json;
            if (AllTradWords.length === 0) AllTradWords = Object.values(dict).join('').split('');
            words = AllTradWords;
        }
    }

    if (!dict) dict = cnchar.dict.stroke;
    if (!words) {
        if (AllWords.length === 0) AllWords = Object.values(cnchar.dict.stroke).join('').split('');
        words = AllWords;
    }

    return typeof stroke !== 'number' ?
        pickRandomEle(words, number).join('') :
        pickRandomChar(dict[stroke], number);
};