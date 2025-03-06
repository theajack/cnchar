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
import {getDict, input} from './input';

const plugin: IPlugin & IInput = Object.assign(input, {
    pluginName: 'input',
    install (cnchar) {
        setCnchar(cnchar);
    },
    dict: getDict(),
} as IPlugin);

if (typeof window === 'object') {
    window.CncharInput = plugin;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default plugin;