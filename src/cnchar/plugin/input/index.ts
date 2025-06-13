/*
 * @Author: tackchen
 * @Date: 2022-05-25 21:20:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-01 18:10:08
 * @FilePath: /cnchar/src/cnchar/plugin/input/index.ts
 * @Description: 汉字输入法支持 拼音和五笔支持
 */

import {IPlugin} from 'cnchar-types/main/common';
import {IInput} from 'cnchar-types/plugin/input';
import {setCnchar} from './cnchar';
import {setSpellMap} from './util';
import {setTradMap} from './wubi';
import {input} from './input';

/** define a custom dictionary */
export const setDictionary = (dictionary: { spell?: Record<string, string>, wubi?: Record<string, string> }) => {
    setSpellMap(dictionary.spell);
    setTradMap(dictionary.wubi);
}

export const InputPlugin: IPlugin & IInput = Object.assign(input, {
    pluginName: 'input',
    install (cnchar) {
        setCnchar(cnchar);
        
        // make user dictionary first
        setSpellMap(cnchar.dict.spell, false);
        if (cnchar.hasPlugin('trad')) {
            setTradMap(cnchar.trad.dict?.wubi, false);
        }
    },
} as IPlugin);

export default InputPlugin;
