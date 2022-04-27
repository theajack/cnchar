// powerd by hanzi-writer v2.2.2
import './promise-polyfill';
import {IDraw} from 'cnchar-types/plugin/draw/common';
import draw from './writer';
import {IPlugin} from 'cnchar-types/main/common';
import {initResourceFromCnchar} from './resource';

const plugin: IPlugin = {
    pluginName: 'draw',
    install (cnchar) {
        initResourceFromCnchar(cnchar);
        return {draw};
    }
};

if (typeof window === 'object') {
    window.CncharDraw = draw;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default Object.assign(draw, plugin) as IDraw & IPlugin;
