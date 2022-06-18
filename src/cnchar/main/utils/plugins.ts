/*
 * @Author: tackchen
 * @Date: 2022-04-10 12:07:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-04 10:01:37
 * @FilePath: /cnchar/src/cnchar/main/utils/plugins.ts
 * @Description: Coding something
 */

import {PluginArg} from 'cnchar-types/main';
import {IPlugin} from 'cnchar-types/main/common';
import {getCnChar} from './tool';
import {_warn} from '@common/util';

const plugins: PluginArg[] = [];

export function hasPlugin (name: string) {
    return plugins.indexOf(name) !== -1;
}

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
        if (!pluginName) {_warn('plugin name is required', plugin); return;}

        if (!addPluginName(pluginName)) return;
        const target = cnchar as any;

        if (args) target.type[pluginName] = args;
        plugin.getCnChar = () => cnchar;
        plugin.installed = true;

        target[pluginName] = plugin;
        if (install) install(cnchar);
    });
}