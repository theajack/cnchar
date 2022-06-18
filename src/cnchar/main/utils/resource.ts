/*
 * @Author: tackchen
 * @Date: 2022-04-10 18:31:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-18 13:12:04
 * @FilePath: /cnchar/src/cnchar/main/utils/resource.ts
 * @Description: Coding something
 */
let resourceBase = '';

export function setResourceBase (url: string): void {
    resourceBase = url;
}

export function getResourceBase (): string {
    return resourceBase;
}