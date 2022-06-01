/*
 * @Author: tackchen
 * @Date: 2022-05-25 21:20:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-31 10:09:37
 * @FilePath: /cnchar/src/cnchar/plugin/input/index.ts
 * @Description: 汉字输入法支持 拼音和五笔支持
 */

import ICnChar from 'cnchar-types';
import {IPlugin} from 'cnchar-types/main/common';
import {IInput} from 'cnchar-types/plugin/input';
import {setCnchar} from './cnchar';
import {getDict, input} from './input';

const plugin: IPlugin = {
    pluginName: 'input',
    install (cnchar: ICnChar) {
        setCnchar(cnchar);
        return {input};
    },
    dict: getDict()
};

if (typeof window === 'object') {
    window.CncharInput = input;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default Object.assign(input, plugin) as IInput & IPlugin;