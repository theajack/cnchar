/*
 * @Author: tackchen
 * @Date: 2022-05-15 17:33:45
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-22 10:35:32
 * @FilePath: /cnchar/src/cnchar/main/utils/random.ts
 * @Description: Coding something
 */

import {IFunc} from 'cnchar-types/main/tool';
import {IRandomWordOptions, IRandomSpellOptions} from 'src/cnchar-types/main';
import {Json} from 'cnchar-types/main/common';
import spellDict from '../dict/spell-dict-jian.json';
// import strokeDict from '../dict/stroke-count-jian.json';

const spellMap: Json<{
    toneIndex: number,
    tones: number[],
}> = (() => {
    const TONES = [0, 1, 2, 3, 4];
    const map: Json<{
        toneIndex: number,
        tones: number[],
    }> = {};
    for (const k in spellDict) {
        const str = (spellDict as Json)[k] as string;
        const toneIndex = parseInt(str[0]);

        const tones: number[] = [];
        TONES.forEach((tone) => {
            if (str.indexOf(`${tone}`) !== -1 || str.indexOf(`${tone + 5}`) !== -1) {
                tones.push(tone);
            }
        });
        map[k] = {toneIndex, tones};
    }
    return map;
})();

(window as any).spellMap = spellMap;

export const randomSpell: IFunc<string[], IRandomSpellOptions> = ({
    number = 1,
    tone = false,
    flat = false,
} = {}) => {
    
    console.log(number, tone, flat);

    return [];
};

export const randomWord: IFunc<string, IRandomWordOptions> = ({

} = {}) => {
    return '';
};