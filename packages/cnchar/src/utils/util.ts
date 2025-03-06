import dict from '../dict';
import {AllArgs} from 'cnchar-types/main';
import {IHas} from 'cnchar-types/main/tool';
import {isCnChar} from '@common/util';

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
    return dict.info.polyWord.indexOf(word) !== -1;
}


