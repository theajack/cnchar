import fiveElementMap from './dict/five-element.json';
import methodMap from './dict/method.json';
import infoDict from './dict/info.json';
import {IInfo, IInfoResult} from 'cnchar-types/plugin/info';
import ICnChar from 'cnchar-types';
import {Json} from 'cnchar-types/main/common';

export function getDict () {
    return {
        fiveElementMap,
        methodMap,
        info: infoDict
    };
}

let cnchar: ICnChar;

export function setCnchar (_cnchar: ICnChar) {
    cnchar = _cnchar;
}

export const info = ((input: string) => {
    
    const result: IInfoResult[] = [];

    for (let i = 0; i < input.length; i++) {
        const word = input[i];
        const dictResult = getSingleWordInfo(infoDict, word);
        result.push(dictResult);
    }
    
    return result;
}) as IInfo;


function getSingleWordInfo (dict: Json<string>, word: string): IInfoResult {
    let str = dict[word];

    if (!str) {
        if (cnchar && cnchar.plugins.indexOf('trad') !== -1) {
            str = cnchar.trad.dict?.info?.[word];
        }
    }

    if (!str) return {methodType: '', fiveElementType: '', markSpell: ''};

    return {
        methodType: (methodMap as Json)[str[0]],
        fiveElementType: (fiveElementMap as Json)[str[1]],
        markSpell: str.substring(2),
    };
}