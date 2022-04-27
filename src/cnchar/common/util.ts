/*
 * @Author: tackchen
 * @Date: 2022-04-10 21:46:46
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-14 22:11:12
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