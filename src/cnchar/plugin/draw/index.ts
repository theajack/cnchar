// powerd by hanzi-writer v2.2.2
import './promise-polyfill';
import {IDraw} from 'cnchar-types/plugin/draw/common';
import draw from './writer';
import {IPlugin} from 'cnchar-types/main/common';
import {initResourceFromCnchar} from './resource';

const plugin: IPlugin & IDraw = Object.assign(draw, {
    pluginName: 'draw',
    install (cnchar) {
        initResourceFromCnchar(cnchar);
    },
} as IPlugin);

if (typeof window === 'object') {
    window.CncharDraw = plugin;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default plugin;
