import {IPlugin} from 'cnchar-types';
import {IName} from 'cnchar-types/plugin/name';
import {name, getDict} from './name';

const plugin: IPlugin & IName = Object.assign(name, {
    pluginName: 'name',
    dict: getDict(),
});

if (typeof window === 'object') {
    window.CncharName = plugin;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default plugin;