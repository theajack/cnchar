/*
 * @Author: tackchen
 * @Date: 2022-05-26 09:37:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-04 10:04:45
 * @FilePath: /cnchar/src/cnchar/plugin/code/code.ts
 * @Description: Coding something
 */
import ICnChar from 'cnchar-types';
import {ICode, ICodeResult, IDictCodeResult} from 'cnchar-types/plugin/code';
import {Json} from 'cnchar-types/main/common';
import dict from './dict/code.json';
import GBK from './gbk';
import {mapJson} from '@common/util';

let cnchar: ICnChar;

export function setCnchar (_cnchar: ICnChar) {
    cnchar = _cnchar;
}

export function getDict () {
    return {code: dict};
}

function singleBinaryCode (word: string) {
    return parseInt(charCode(word)).toString(2);
}

export function binaryCode (word: string, decode = false): string {
    if (decode) {
        if (word.indexOf(' ') === 0) {
            return charCode(parseInt(word, 2) + '', true);
        }
        return charCode(word.split(' ').map(c => {
            return parseInt(c, 2) + '';
        }).join(' '), true);
    } else {
        if (word.length === 0) {
            return singleBinaryCode(word);
        }
        return word.split('').map((c) => {
            return singleBinaryCode(c);
        }).join(' ');
    }
}

export function charCode (word: string, decode = false): string {
    if (decode) {
        if (word.indexOf(' ') === 0) {
            return String.fromCharCode(parseInt(word));
        }
        return word.split(' ').map(code => {
            return String.fromCharCode(parseInt(code));
        }).join('');
    } else {
        if (word.length === 0) {
            return word.charCodeAt(0) + '';
        }
        return word.split('').map(char => {
            return char.charCodeAt(0) + '';
        }).join(' ');
    }
}

export function gbkCode (str: string, decode = false): string {
    return decode ? GBK.decode(str) : GBK.encode(str);
}

export function urlCode (word: string, decode = false): string {
    return decode ? decodeURIComponent(word) : encodeURIComponent(word);
}

export function uniCode (word: string, decode = false): string {
    return decode ? unescape(word) : escape(word);
}

export const code = ((input: string) => {
    const result: ICodeResult[] = [];
    for (let i = 0; i < input.length; i++) {
        const word = input[i];
        const dictResult = getSingleWordCode(dict, word);
        result.push({
            ...dictResult,
            char: charCode(word),
            gbk: gbkCode(word),
            url: urlCode(word),
            unicode: uniCode(word),
            binary: binaryCode(word),
        });
    }
    return result;
}) as ICode;

code.binary = binaryCode;
code.char = charCode;
code.gbk = gbkCode;
code.url = urlCode;
code.unicode = uniCode;

code.sijiao = buildCommonCode('sijiao');

code.cangjie = buildCommonCode('cangjie');

code.uniform = buildCommonCode('uniform');

code.setCode = (words:string | Json<IDictCodeResult>, data?: IDictCodeResult) => {
    mapJson(words, data, (k, v: IDictCodeResult) => {
        (dict as any)[k] = `${v.sijiao} ${v.cangjie} ${v.uniform}`;
    });
};

function buildCommonCode (attr: string) {
    return (word: string, decode = false) => {
        return decode ? dictDecodeCommon(word) : dictEncodeCommon(word, attr);
    };
}

function dictEncodeCommon (word: string, attr: string): string {
    return word.split('').map(c => {
        return (getSingleWordCode(dict, c) as Json)[attr];
    }).join(' ');
}

function dictDecodeCommon (word: string): string {
    return word.split(' ').map(c => {
        return parseSingleWordCode(dict, c);
    }).join('');
}

function parseSingleWordCode (dict: Json<string>, code: string, trad = false): string {
    for (const key in dict) {
        if (dict[key].indexOf(code) !== -1) {
            return key;
        }
    }

    if (!trad && cnchar && cnchar.hasPlugin('trad')) {
        return parseSingleWordCode(cnchar.trad.dict?.code, code, true);
    }
    return '-';
}

function getSingleWordCode (dict: Json<string>, word: string): IDictCodeResult {
    let str = dict[word];

    if (!str) {
        if (cnchar && cnchar.hasPlugin('trad')) {
            str = cnchar.trad.dict?.code?.[word];
        }
    }

    if (!str) return {sijiao: '', cangjie: '', uniform: ''};

    const arr = str.split(' ');

    return {
        sijiao: arr[0],
        cangjie: arr[1],
        uniform: arr[2]
    };
}