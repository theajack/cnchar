import infoDict from './dict/info-dict.json';
import {AllArgs} from './types';
import {Json} from './types/common';
import {IHas, IFunc, IMapJson} from './types/tool';

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

export const isCnChar: IFunc<boolean> = (word: string): boolean => {
    const unicode: number = word.charCodeAt(0);
    return unicode >= 19968 && unicode <= 40869;
};

export const has: IHas = (args: Array<AllArgs>, name: AllArgs): boolean => {
    return args.indexOf(name) !== -1;
};

export function isPolyWord (word: string): boolean {
    if (word === '') {
        return false;
    }
    if (word.length > 1) {
        word = word[0];
    }
    if (!isCnChar(word)) {
        return false;
    }
    return infoDict.polyWord.indexOf(word) !== -1;
}

export const _throw: IFunc<never> = (err: string): never => {
    throw new Error('CnChar Error:' + err);
};

export const _warn: IFunc<void> = (info: string): void => {
    console.warn('CnChar Warning:' + info);
};


