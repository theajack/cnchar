import {pickRandomEle} from '@common/util';
import {IRandomWordsOptions} from 'cnchar-types/plugin/random';
import {getPlugin} from '../store';

export function randomWords ({
    number = 1,
    length,
    match,
}: IRandomWordsOptions = {}): string[] {
    const words = getPlugin('words');
    if (!words) {
        console.warn('words plugin is not installed');
        return [];
    }

    let dictString: string = '';

    if (match) {
        dictString = (words as any)(match).join(' ');
        if (dictString) dictString = ` ${dictString} `;
    }

    if (!dictString)
        dictString = words.dict?.words;

    const array = dictString.match(new RegExp(` .{${length ? length : '2,3'}} `, 'g'));

    if (!array) return [];
        
    return pickRandomEle(array, number).map((str) => {
        return str.trim();
    });
}