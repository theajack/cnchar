/*
 * @Author: chenzhongsheng
 * @Date: 2022-10-09 09:18:54
 * @Description: Coding something
 */
import {IRadical} from 'cnchar-types/plugin/radical';
import {IPlugin} from 'cnchar-types/main/common';
import {
    getDict, getRadicalCount, isRadical, radicalToWord,
    radical, setCnchar, setRadical
} from './radical';

const plugin: IPlugin & IRadical = Object.assign(radical, {
    pluginName: 'radical',
    install (cnchar) {
        setCnchar(cnchar);
    },
    setRadical,
    getRadicalCount,
    radicalToWord,
    isRadical,
    dict: getDict(),
} as IPlugin);

if (typeof window === 'object') {
    window.CncharRadical = plugin;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default plugin;