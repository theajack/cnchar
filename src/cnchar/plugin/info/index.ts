/*
 * @Author: tackchen
 * @Date: 2022-05-25 21:20:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-01 14:13:23
 * @FilePath: /cnchar/src/cnchar/plugin/info/index.ts
 * @Description: 汉字信息查询支持
 */

import {IPlugin} from 'cnchar-types/main/common';
import {IInfo} from 'cnchar-types/plugin/info';
import {getDict, info, setCnchar} from './info';

const plugin: IPlugin & IInfo = Object.assign(info, {
    pluginName: 'info',
    install (cnchar) {
        setCnchar(cnchar);
    },
    dict: getDict(),
} as IPlugin);

if (typeof window === 'object') {
    window.CncharInfo = plugin;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default plugin;