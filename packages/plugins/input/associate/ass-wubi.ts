import {IInputResult} from 'cnchar-types/plugin/input';
import {getCnChar} from '../cnchar';
import {getAssociateWordsString, sortArrayWithWeights} from './common';

// cnchar.input('QTNYbj', {type: 'wubi', mode: 'simple', associate: true})
export function associateWubi (associate: boolean, result: IInputResult) {
    if (!associate || result.length === 0) return result;
        

    const cnchar = getCnChar();
    if (!cnchar) {
        console.warn('associateWubi: cnchar is not installed');
        return result;
    }

    const weights: number[] = []; // 结果权重

    result.forEach((item) => {
        const words = item.words;
        const length = words.length;
    
        item.association = words.map((item, i) => words[i]); // 填充 association

        const assWords = words[length - 1];

        if (assWords.length === 1 || !cnchar.isCnChar(assWords)) {
            weights.push(0);
            return;
        }

        const ref = words[length - 2];

        // 空格表示从以ref起头的词语
        const reg = new RegExp(` ${ref}[${assWords}]`, 'g');
    
        const chars = findAssociatePriorityWords(reg);

        words[length - 1] = pickCharsToHead(assWords, chars);

        item.association[length - 1] = chars.join('');

        weights.push(chars.length);
    });

    return sortArrayWithWeights(result, weights);
}

// 将部分字符提到头部
function pickCharsToHead (str: string, chars: string[]) {
    let head = '', rest = '';

    for (let i = 0; i < str.length; i++) {
        if (chars.indexOf(str[i]) !== -1) {
            head += str[i];
        } else {
            rest += str[i];
        }
    }
    return head + rest;
}

function findAssociatePriorityWords (reg: RegExp) {

    const priorityChar: string[] = [];

    const str = getAssociateWordsString();
    if (str) {
        const arr = str.match(reg);
        if (arr) {
            priorityChar.push(...arr.map(words => words[words.length - 1]));
        }
    }

    return priorityChar; // 会有重复汉字 但是不需要去重
}
