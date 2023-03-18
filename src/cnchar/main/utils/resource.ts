/*
 * @Author: tackchen
 * @Date: 2022-04-10 18:31:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-18 22:27:39
 * @FilePath: /cnchar/src/cnchar/main/utils/resource.ts
 * @Description: Coding something
 */
import ICnChar from 'cnchar-types';

let resourceBase = '';

export function setResourceBase (this: ICnChar, url: string): void {
    resourceBase = url;
    this.plugins.forEach(name => {
        const plugin = (this as any)[name];
        if (!plugin) return;
        plugin._refreshResource?.(this);
    });
}

export function getResourceBase (): string {
    return resourceBase;
}