/*
 * @Author: tackchen
 * @Date: 2022-05-25 21:20:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-29 22:16:37
 * @FilePath: /cnchar/src/cnchar/plugin/info/index.ts
 * @Description: 汉字信息查询支持
 */

import ICnChar from 'cnchar-types';
import {IPlugin} from 'cnchar-types/main/common';
import {IInfo} from 'src/cnchar-types/plugin/info';
import {getDict, info, setCnchar} from './info';

const plugin: IPlugin = {
    pluginName: 'info',
    install (cnchar: ICnChar) {
        setCnchar(cnchar);
        return {info};
    },
    dict: getDict()
};

if (typeof window === 'object') {
    window.CncharInfo = info;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default Object.assign(info, plugin) as IInfo & IPlugin;