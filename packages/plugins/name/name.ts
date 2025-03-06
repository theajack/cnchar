

import {IName, INameOptions, TGender} from 'cnchar-types/plugin/name';
import {appendWordsToString, isCnChar, pickRandomChar, pickRandomEle} from '@common/util';
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
    gender: TGender
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

function isSurname (input: string) {
    input = input.trim();
    if (!isCnChar(input)) return false;
    return !!surnameDict.dict.match(new RegExp(` ${input} `));
};

name.isName = (input: string) => {
    input = input.trim();
    if (!isCnChar(input)) return false;

    if (isSurname(input.substring(0, 2))) {
        return input.length < 5 && input.length > 2;
    }
    if (isSurname(input[0])) {
        return input.length < 4 && input.length > 1;
    }
    return false;
};

name.isSurname = isSurname;

name.addName = (input: string, gender = 'both') => {
    if (gender === 'both' || gender === 'boy') {
        nameDict.boy = appendWordsToString(nameDict.boy, input);
        if (gender === 'both')
            nameDict.girl = appendWordsToString(nameDict.girl, input);
    } else {
        nameDict.girl = appendWordsToString(nameDict.girl, input);
    }
};

export function getDict () {
    return {
        name: nameDict,
        surname: surnameDict.dict
    };
}