import {pickRandomEle} from '@common/util';
import {IIdiom} from 'cnchar-types/plugin/idiom';
import {IRandomIdiomOptions} from 'cnchar-types/plugin/random';
import {getPlugin} from '../store';

export function randomIdiom ({
    number = 1,
    query
}: IRandomIdiomOptions = {}): string[] {
    const idiom = getPlugin('idiom');
    if (!idiom) {
        console.warn('idiom plugin is not installed');
        return [];
    }

    let dict: string[] | null = null;

    if (query) {
        dict = (idiom as any as IIdiom)(query);
    }

    if (!dict) dict = idiom.dict?.idiom as string[];
    return pickRandomEle(dict, number);
}