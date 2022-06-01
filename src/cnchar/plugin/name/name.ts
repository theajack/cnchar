

import {IName, INameOptions} from 'cnchar-types/plugin/name';
import {isCnChar, pickRandomChar, pickRandomEle} from '@common/util';
import nameDict from './dict/name.json';
import surnameDict from './dict/surname.json';

export const name = ((input: string, {
    number = 1,
    gender = 'both',
    length = 3
}: INameOptions = {}) => {
    if (!input) return [];
    const match = input.match(/\*/g);
    if (match) {
        length = match.length;

        let surname: string[] = [];
        if (input[0] === '*') {
            length --;
            surname = pickRandomSurname(number);
        }
        const names = pickRandomNames(length, number, gender);

        return names.map((item, index) => {
            let replaceIndex = 0;
            return input.replace(/\*/g, (v, i) => {
                return i === 0 ? surname[index] : item[replaceIndex++];
            });
        });
    } else {
        if (input.length > length) return [input];
        length -= input.length;
        return pickRandomNames(length, number, gender).map(item => `${input}${item}`);
    }
}) as IName;

function pickRandomNames (
    length: number,
    number: number,
    gender: 'boy' | 'girl' | 'both'
) {
    const str = getNameStr(gender);
    const result: string[] = [];
    for (let i = 0; i < number; i++) {
        result.push(pickRandomChar(str, length));
    }
    return result;
}

function pickRandomSurname (number: number) {
    return pickRandomEle(surnameDict.dict.split(' '), number);
}

function getNameStr (gender: 'boy' | 'girl' | 'both') {
    if (gender === 'both') return nameDict.boy + nameDict.girl;
    if (gender === 'boy') return nameDict.boy;
    return nameDict.girl;
}

name.isName = (input: string) => {
    if (!isCnChar(input)) return false;
    return true;
};
name.isSurname = (input: string) => {
    if (!isCnChar(input)) return false;
    return !!surnameDict.dict.match(new RegExp(`^${input}$`));
};
export function getDict () {
    return {
        name: nameDict,
        surname: surnameDict.dict
    };
}