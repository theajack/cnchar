/*
 * @Author: tackchen
 * @Date: 2022-05-25 21:20:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-01 18:10:27
 * @FilePath: /cnchar/src/cnchar/plugin/code/index.ts
 * @Description: 汉字编码支持
 */

// unicode 二进制code 仓颉码 四角号码 统一编码 GBK编码 charCode 五行属性

import ICnChar from 'cnchar-types';
import {IPlugin} from 'cnchar-types/main/common';
import {ICode} from 'cnchar-types/plugin/code';
import {getDict, code, setCnchar} from './code';

const plugin: IPlugin & ICode = Object.assign(code, {
    pluginName: 'code',
    install (cnchar: ICnChar) {
        setCnchar(cnchar);
    },
    dict: getDict(),
} as IPlugin);

if (typeof window === 'object') {
    window.CncharCode = plugin;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default plugin;