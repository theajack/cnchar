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
            associateWords += (cnchar.words.dict.words as string);
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

// 根据权重排序原数组
export function sortArrayWithWeights<T = any> (result: T[], weights: number[]) {

    const newResult: T[] = [];
    const sortWeight: number[] = [];
    for (let i = 0; i < result.length; i++) {
        const weight = weights[i];

        let sorted = false;
        for (let j = 0; j < sortWeight.length; j++) {
            if (weight >= sortWeight[j]) {
                sortWeight.splice(j, 0, weight);
                newResult.splice(j, 0, result[i]);
                sorted = true;
                break;
            }
        }
        if (!sorted) {
            sortWeight.push(weight);
            newResult.push(result[i]);
        }
    }

    return newResult;
}