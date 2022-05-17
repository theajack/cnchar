/*
 * @Author: tackchen
 * @Date: 2022-05-15 17:33:45
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-17 19:35:23
 * @FilePath: /cnchar/src/cnchar/main/utils/random.ts
 * @Description: Coding something
 */

import {IFunc} from 'cnchar-types/main/tool';
import {IRandomWordOptions, IRandomSpellOptions} from 'src/cnchar-types/main';
import {Json} from 'cnchar-types/main/common';
import spellDict from '../dict/spell-dict-jian.json';
import strokeDict from '../dict/stroke-count-jian.json';

let spellMap: Json;

function initSpellMap () {
    if (typeof spellMap === 'undefined') {
        spellMap = {};

        
    }
}

export const randomSpell: IFunc<string[], IRandomSpellOptions> = ({
    number = 1,
    tone = false,
    flat = false,
} = {}) => {
    

    return [];
};

export const randomWord: IFunc<string, IRandomWordOptions> = ({

} = {}) => {
    
};