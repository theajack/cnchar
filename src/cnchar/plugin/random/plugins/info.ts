import {pickRandomEle} from '@common/util';
import {Json} from 'cnchar-types/main/common';
import {IRandomInfoOptions} from 'cnchar-types/plugin/random';
import {getPlugin} from '../store';

function reverseMap (map: Json) {
    const newMap: Json = {};
    for (const k in map) {
        newMap[map[k]] = k;
    }
    return newMap;
}

export function randomWithInfo ({
    number = 1,
    fiveElement,
    method,
}: IRandomInfoOptions = {}) {

    const info = getPlugin('info');
    if (!info) {
        console.warn('info plugin is not installed');
        return '';
    }

    if (!fiveElement && !method) {
        console.warn('randomWithInfo: fiveElement or method is required');
        return '';
    }

    const dict = info.dict?.info;
    const fiveElementMap = reverseMap(info.dict?.fiveElementMap);
    const methodMap = reverseMap(info.dict?.methodMap);

    if (fiveElement) {
        fiveElement = fiveElementMap[fiveElement];
    }
    if (method) {
        method = methodMap[method];
    }

    const arr: string[] = [];

    // 减少if判断次数
    if (fiveElement) {
        for (const word in dict) {
            const str = dict[word];
            if (str[1] === fiveElement) {
                arr.push(word);
            }
        }
    } else if (method) {
        for (const word in dict) {
            const str = dict[word];
            if (str[0] === method) {
                arr.push(word);
            }
        }
    } else if (fiveElement && method) {
        for (const word in dict) {
            const str = dict[word];
            if (str[0] === method && str[1] === fiveElement) {
                arr.push(word);
            }
        }
    }

    return pickRandomEle(arr, number).join('');
}