import infoDict from '../dict/info-dict.json';
import {AllArgs} from 'cnchar-types/main';
import {IHas, IFunc} from 'cnchar-types/main/tool';

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


