import {pickRandomEle} from '@common/util';
import {IdomArg} from 'cnchar-types/main';
import {IIdiom} from 'cnchar-types/plugin/idiom';
import {IRandomIdiomOptions} from 'cnchar-types/plugin/random';
import {getPlugin} from '../store';

export function randomIdiom ({
    number = 1,
    pattern
}: IRandomIdiomOptions): string[] {
    const idiom = getPlugin('idiom');
    if (!idiom) {
        console.warn('idiom plugin is not installed');
        return [];
    }

    let dict: string[] | null = null;

    if (pattern && pattern.length > 0) {
        const input = pattern.shift() as string;
        dict = (idiom as any as IIdiom)(input, ...pattern as IdomArg[]);
    }

    if (!dict) dict = idiom.dict?.idiom as string[];
    return pickRandomEle(dict, number);
}