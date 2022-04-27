import {ICnChar} from 'cnchar-types/main';
import {IXHY} from 'cnchar-types/plugin/xhy';
import {IPlugin} from 'cnchar-types/main/common';
import {xhy, arg, addXhy, setCnchar} from './xhy';

const plugin: IPlugin = {
    pluginName: 'xhy',
    install (cnchar: ICnChar) {
        setCnchar(cnchar);
        xhy.addXhy = addXhy;
        return {xhy};
    },
    args: arg
};

if (typeof window === 'object') {
    window.CncharXHY = xhy;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default Object.assign(xhy, plugin) as IXHY & IPlugin;