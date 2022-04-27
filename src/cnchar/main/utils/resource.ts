/*
 * @Author: tackchen
 * @Date: 2022-04-10 18:31:22
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-10 18:34:08
 * @FilePath: /cnchar/src/cnchar/main/utils/resource.ts
 * @Description: Coding something
 */
let resourceBase = 'https://cdn.jsdelivr.net/npm/cnchar-data@latest/';

export function setResourceBase (url: string): void {
    resourceBase = url;
}

export function getResourceBase (): string {
    return resourceBase;
}