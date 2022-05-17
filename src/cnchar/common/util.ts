/*
 * @Author: tackchen
 * @Date: 2022-04-10 21:46:46
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-15 17:42:42
 * @FilePath: /cnchar/src/cnchar/common/util.ts
 * @Description: Coding something
 */
import {IFunc, IMapJson} from 'cnchar-types/main/tool';
import {Json} from 'cnchar-types/main/common';

export const _throw: IFunc<never> = (err: string): never => {
    throw new Error('CnChar Error:' + err);
};

export const _warn: IFunc<void> = (...infos: string[]): void => {
    console.warn('CnChar Warning:', ...infos);
};

export function parseJSON (str: string): Json | null {
    try {
        return JSON.parse(str);
    } catch (e) {
        return null;
    }
}

export const mapJson: IMapJson = (
    key: Json | string,
    value: undefined | any,
    cb: (key: string, value: any) => void
): void => {
    if (typeof key === 'object') {
        for (const k in key) {
            cb(k, key[k]);
        }
        return;
    }
    cb(key, value);
};

// 从数组中随机选取n个元素
export function pickRamdonEle<T = string> (arr: T[], n: number = 1): T[] {
    if (n === 0) return [];
    if (n >= arr.length) return shuffle<T>(Object.assign([], arr));
    const result = [];
    const len = arr.length;
    const index: number[] = [];
    while (index.length < n) {
        const i = randomNum(0, len - 1);
        if (!index.includes(i)) {
            index.push(i);
            result.push(arr[i]);
        }
    }
    return result;
}

// 数字洗牌算法
export function shuffle<T=string> (array: T[]): T[] {
    var m = array.length,
        t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

export function randomNum (a: number, b: number): number {
    return (a + Math.round(Math.random() * (b - a)));
}