import {IXHY} from 'cnchar-types/plugin/xhy';
import {IPlugin} from 'cnchar-types/main/common';
import {xhy, arg, addXhy, setCnchar, getDict} from './xhy';

const plugin: IPlugin & IXHY = Object.assign(xhy, {
    pluginName: 'xhy',
    install (cnchar) {
        setCnchar(cnchar);
    },
    addXhy,
    args: arg,
    dict: getDict(),
} as IPlugin);

if (typeof window === 'object') {
    window.CncharXHY = plugin;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default plugin;