import {pickRandomEle} from '@common/util';
import {XhyArg} from 'cnchar-types/main';
import {IRandomXHYOptions} from 'cnchar-types/plugin/random';
import {IXHY} from 'cnchar-types/plugin/xhy';
import {getPlugin} from '../store';

export function randomXHY ({
    number = 1,
    pattern
}: IRandomXHYOptions = {}): string[] {
    const xhy = getPlugin('xhy');
    if (!xhy) {
        console.warn('xhy plugin is not installed');
        return [];
    }

    if (pattern && pattern.length > 0) {
        const input = pattern.shift() as string;
        const dict = (xhy as any as IXHY)(input, ...pattern as XhyArg[]);
        return pickRandomEle(dict, number);
    }

    const array = xhy.dict?.array as Array<[string, string]>;

    return pickRandomEle(array, number).map((array) => {
        return `${array[0]}-${array[1]}`;
    });
}