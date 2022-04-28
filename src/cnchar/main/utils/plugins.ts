/*
 * @Author: tackchen
 * @Date: 2022-04-10 12:07:55
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-10 21:51:34
 * @FilePath: /cnchar/src/cnchar/main/utils/plugins.ts
 * @Description: Coding something
 */

import {PluginArg} from 'cnchar-types/main';
import {IPlugin, Json} from 'cnchar-types/main/common';
import {getCnChar} from './tool';
import {_warn} from '@common/util';

const plugins: PluginArg[] = [];

export const getPlugins = (): PluginArg[] => plugins;

function addPluginName (name: PluginArg) {
    if (plugins.indexOf(name) !== -1) {
        return false;
    }
    plugins.push(name);
    return true;
}

export function installPlugin (...plugins: Array<IPlugin>): void {
    const cnchar = getCnChar();
    plugins.forEach(plugin => {

        const {pluginName, install, args} = plugin;

        if (!pluginName) {_warn('plugin name is required'); return;}

        if (!addPluginName(pluginName)) return;
        const target = cnchar as any;

        if (args) target.type[pluginName] = args;

        const map = install(cnchar) as unknown as Json;
        if (typeof map === 'object') {
            for (const k in map) {
                if (typeof target[k] === 'undefined' || target[k].__default) {
                    target[k] = map[k];
                } else {
                    _warn(`${k} is already defined`);
                }
            }
        }
    });
}