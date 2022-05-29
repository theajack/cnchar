
import {IPlugin} from 'cnchar-types/main/common';
import {IRandom} from 'cnchar-types/plugin/random';
import {random} from './random';
import {setCnchar} from './store';

const plugin: IPlugin = {
    pluginName: 'random',
    install (cnchar) {
        setCnchar(cnchar);
        return {random};
    },
    dict: {}
};

if (typeof window === 'object') {
    window.CncharRandom = random;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default Object.assign(random, plugin) as IRandom & IPlugin;