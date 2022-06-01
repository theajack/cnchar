import {getCnChar} from '../cnchar';

let associateWords: string = '';

export function getAssociateWordsString () {
    if (!associateWords) {
        const cnchar = getCnChar();
        if (!cnchar) return '';
    
        if (cnchar.poly) {
            associateWords = ' ' + Object.keys(cnchar.poly.dict.phrases).join(' ');
        }
    
        if (cnchar.words) {
            associateWords += (cnchar.words.dict.words.wordsString as string);
        }
    }

    return associateWords;
}

// 数组去重 会返回新数组
export function distinctArray (arr: any[]) {
    if ('undefined' !== typeof window && window.Set) {
        return Array.from(new Set(arr));
    }
    const newArr: any[] = [];
    arr.forEach((item) => {
        if (!newArr.includes(item)) newArr.push(item);
    });
    return newArr;
}
