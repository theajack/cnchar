import {requestJson} from '@common/request-json';
import {mapJson} from '@common/util';
import ICnChar from 'cnchar-types';
import {Json} from 'cnchar-types/main/common';
import {getResourceBase} from './resource';
import {IExplain} from 'cnchar-types/plugin/explain';

const TempDict: Json<string> = {};

export function getTempDict () {
    return TempDict;
}

export const args: Json = {
    trad: 'trad',
};

let _cnchar: ICnChar;
export function setCnchar (cnchar: ICnChar) {
    _cnchar = cnchar;
}

export const explain = (async (word: string, ...args: string[]) => {
    if (_cnchar) {
        word = _cnchar._.checkTrad(word, args) as string;
    }
    if (TempDict[word]) return TempDict[word];
    const head = word[0];
    const json = await requestJson(`${getResourceBase()}${head}.json`);
    if (!json || !json[word]) return '';
    return json[word];
}) as IExplain;

explain.addExplain = (words:string | Json<string>, explain?: string) => {
    mapJson(words, explain, (k, v) => {
        TempDict[k] = v;
    });
};