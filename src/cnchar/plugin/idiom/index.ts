import {ICnChar} from 'cnchar-types/main';
import {idiom, arg, setCnchar} from './idiom';
import {IIdiom} from 'cnchar-types/plugin/idiom';
import {IPlugin} from 'cnchar-types/main/common';

const plugin: IPlugin = {
    pluginName: 'idiom',
    install (cnchar: ICnChar) {
        setCnchar(cnchar);
        return {idiom};
    },
    args: arg
};

if (typeof window === 'object') {
    window.CncharIdiom = idiom;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default Object.assign(idiom, plugin) as IIdiom & IPlugin;

