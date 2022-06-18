/*
 * @Author: tackchen
 * @Date: 2022-05-30 10:22:26
 * @Description: 根据
 */

import {Json} from 'cnchar-types/main/common';
import {IInputOptions, IInputResult} from 'cnchar-types/plugin/input';
import {associateWubi} from './associate/ass-wubi';
import {getDict} from './input';
import {debounceReturn} from './util';

const Map = buildWubiMap(getDict().wubi);

let TradMap: Json | null = null;

let BothMap: Json | null = null;

export function initTradMap (dict: Json) {
    if (!dict) return;
    TradMap = buildWubiMap(dict);

    BothMap = buildWubiMap({
        ...dict,
        ...getDict().wubi
    });
}

function buildWubiMap (dict: Json) {
    const m86: Json = {};
    const m98: Json = {};
    for (const k in dict) {
        const arr = (dict[k] as string).split(' ');
        
        m86[arr[0]] = k;
        m98[arr[1] || arr[0]] = k;
    }

    return {
        m86: {
            dict: m86, // {RWI: '失'}
            keys: Object.keys(m86),
        },
        m98: {
            dict: m98, // {TGI: '失'}
            keys: Object.keys(m98),
        },
    };
}

export function wubiInput (
    input: string,
    {
        wubiVersion = '86',
        debounce = 0,
        onResult,
        wubiMode,
        associate = true,
    }: IInputOptions,
): IInputResult {
    return debounceReturn(
        'wubi' + wubiVersion,
        debounce,
        () => associateWubi(associate, wubiInputBase(input, wubiVersion, wubiMode)),
        onResult,
    );
}

export function wubiInputBase (
    input: string,
    version: '86' | '98' = '86',
    mode: 'trad' | 'simple' | 'both' = 'both',
): IInputResult {
    let OriginMap: Json = Map;

    if (mode !== 'simple') {
        if (!TradMap) {
            console.warn('TradMap is not init, please install cnchar-trad');
        } else {
            if (mode === 'trad') {
                OriginMap = TradMap;
            } else if (mode === 'both') {
                OriginMap = BothMap as Json;
            }
        }
    }
    const map = (OriginMap as any)[`m${version}`] || OriginMap.m86;

    return traverse(input, map);
}

function traverse (
    input: string,
    map: Json,
    path: string = '',
    codePath: string[] = [],
    result: IInputResult = [],
) {
    let matchFirst = false; // 是否匹配到了3个长度的五笔
    [3, 4].forEach(length => {
        if (input.length < length) return;
        const [code, rest] = splitString(input, length);
        const word = map.dict[code];
        if (word) {
            if (length === 3) matchFirst = true;
            const newPath = path + word;
            const newCodePath = [...codePath, code];
            if (rest.length < 3) {
                const arr = newPath.split('');
                if (rest.length > 0) {
                    arr.push(matchOptionWords(map, rest));
                    newCodePath.push(rest);
                }
                result.push({
                    split: newCodePath,
                    words: arr,
                    association: [],
                });
            } else {
                traverse(rest, map, newPath, newCodePath, result);
            }
        } else {
            if (length === 3) {
                if (rest.length === 0) { // 如果三个长度且没有剩余字符，则直接push
                    result.push({
                        split: [...codePath, code],
                        words: [...path.split(''), matchOptionWords(map, code)],
                        association: [],
                    });
                }
            } else {
                if (!matchFirst) {// 如果匹配到了3个长度的五笔， 则对于未匹配到的四个长度的rest不进行push
                    result.push({
                        split: [...codePath, input],
                        words: [...path.split(''), input],
                        association: [],
                    });
                }
            }
        }
    });
    return result;
}

// 查找可选的汉字
function matchOptionWords (map: Json, code: string): string {
    return map.keys.filter((key: string) => {
        return key.indexOf(code) === 0;
    }).map((key: string) => map.dict[key]).join('') || code;
}

// QTNYYGT [['勹', '广'], ['夕', 'YGT']]
// cnchar.input('DIMTQTNYYGT', {type: 'wubi'})
// cnchar.input('ABC', {type: 'wubi'})
// cnchar.input('FGHYBGDNV', {type: 'wubi'})
// cnchar.input('QTNYYGTMADTFALKLWGGYPEGKUP', {type: 'wubi'})
// cnchar.input('QTNYBJGQTNYB', {type: 'wubi'})

export function splitString (str: string, index: number) {
    return [str.substring(0, index), str.substring(index)];
}

