import {idiom, arg, setCnchar, getDict} from './idiom';
import {IIdiom} from 'cnchar-types/plugin/idiom';
import {IPlugin} from 'cnchar-types/main/common';

const plugin: IPlugin & IIdiom = Object.assign(idiom, {
    pluginName: 'idiom',
    install (cnchar) {
        setCnchar(cnchar);
    },
    args: arg,
    dict: getDict(),
} as IPlugin);


if (typeof window === 'object') {
    window.CncharIdiom = plugin;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default plugin;

