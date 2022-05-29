/*
 * @Author: tackchen
 * @Date: 2022-04-10 21:46:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-29 10:57:31
 * @FilePath: /cnchar/src/cnchar/common/util.ts
 * @Description: Coding something
 */
import {IFunc, IMapJson} from 'cnchar-types/main/tool';
import {Json} from 'cnchar-types/main/common';

export const _throw: IFunc<never> = (err: string): never => {
    throw new Error('CnChar Error:' + err);
};

export function _warn (...infos: any[]): void {
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
export function pickRandomEle<T = string> (arr: T[], n: number = 1): T[] {
    if (!arr || arr.length === 0 || n === 0) return [];
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

export function pickRandomChar (str: string, n = 1): string {
    if (!str) return '';
    return pickRandomEle(str.split(''), n).join('');
}

// 数字洗牌算法
export function shuffle<T=string> (array: T[]): T[] {
    let m = array.length,
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

export function findKeyInMap (map: Json<string>, str: string) {
    for (const key in map) {
        const index = map[key].indexOf(str);
        if (index !== -1) {
            return {index, key};
        }
    }
    return null;
}

export function findEqualKeyInMap (map: Json<string>, str: string) {
    for (const k in map) {
        if (map[k] === str) return k;
    }
    return '';
}