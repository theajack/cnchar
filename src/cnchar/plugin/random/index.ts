
import {IPlugin} from 'cnchar-types/main/common';
import {IRandom} from 'cnchar-types/plugin/random';
import {random} from './random';
import {setCnchar} from './store';

const plugin: IPlugin & IRandom = Object.assign(random, {
    pluginName: 'random',
    install (cnchar) {
        setCnchar(cnchar);
    },
} as IPlugin);

if (typeof window === 'object') {
    window.CncharRandom = plugin;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default plugin;