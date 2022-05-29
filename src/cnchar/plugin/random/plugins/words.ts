import {pickRandomEle} from '@common/util';
import {IRandomWordsOptions} from 'src/cnchar-types/plugin/random';
import {IWords} from 'src/cnchar-types/plugin/words';
import {getPlugin} from '../store';

export function randomWords ({
    number = 1,
    length,
    pattern
}: IRandomWordsOptions): string[] {
    const words = getPlugin('words');
    if (!words) {
        console.warn('words plugin is not installed');
        return [];
    }

    let dictString: string = '';

    if (pattern && pattern.length > 0) {
        const input = pattern.shift() as string;
        dictString = (words as any as IWords)(input, ...pattern as string[]).join(' ');
        if (dictString) dictString = ` ${dictString} `;
    }

    if (!dictString)
        dictString = words.dict?.words.wordsString;

    const array = dictString.match(new RegExp(` .{${length}} `, 'g'));

    if (!array) return [];
        
    return pickRandomEle(array, number).map((str) => {
        return str.trim();
    });
}