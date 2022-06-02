import ICnChar from 'cnchar-types';
import {IPlugin, Json} from 'cnchar-types/main/common';

const map: Json & {cnchar?: ICnChar} = {
};

export function setCnchar (cnchar: ICnChar) {
    map.cnchar = cnchar;
}

export function getCnChar () {
    return map.cnchar;
}

export function usePlugin (...plugins: IPlugin[]) {
    plugins.forEach(plugin => {
        if (!map[plugin.pluginName]) {
            map[plugin.pluginName] = plugin;
        }
    });
}

export function getPlugin (name: string): IPlugin | null {
    if (map[name]) return map[name];
    if (map.cnchar) return (map.cnchar as any)[name] || null;
    return null;
}