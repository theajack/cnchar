/*
 * @Author: tackchen
 * @Date: 2022-04-14 23:05:19
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-28 12:26:30
 * @FilePath: /cnchar/src/cnchar/common/adapter.ts
 * @Description: Coding something
 */

declare const wx: any;
declare const __wxConfig: any;

export const Env = (() => {
    // todo 其他环境
    if (typeof wx === 'object' && typeof __wxConfig === 'object') {
        return 'miniapp';
    } else if (typeof window === 'object') {
        return 'web';
    } else {
        return 'node';
    }
})();