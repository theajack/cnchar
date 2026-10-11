import {ICnChar, XhyArg} from 'cnchar-types/main';
import {dict} from './dict/xhy.json';
import {IAddXhy, IXHY, TAddXhyArg1} from 'cnchar-types/plugin/xhy';

let _cnchar: ICnChar;

export function getDict () {
    return {
        array: dict
    };
}

export const arg: {
    [prop in XhyArg]: XhyArg
} = {
    'fuzzy': 'fuzzy',
    'answer': 'answer',
    'second': 'second'
};

export const xhy = ((str:string, ...args: Array<XhyArg>): Array<string> => {
    if (_cnchar) {
        _cnchar._.checkArgs('xhy', args);
    }
    const isFuzzy = args.indexOf(arg.fuzzy) !== -1;
    const onlyAnswer = args.indexOf(arg.answer) !== -1;
    const second = args.indexOf(arg.second) !== -1;
    const quesIndex = second ? 1 : 0;
    const answerIndex = 1 - quesIndex;
    if (isFuzzy) {
        let res: Array<string> = [];
        for (let i = 0; i < dict.length; i++) {
            if (dict[i][quesIndex].indexOf(str) !== -1) {
                const answer = shapeAnswer(dict[i], onlyAnswer, answerIndex);
                res = res.concat(answer);
            }
        }
        return res;
    } else {
        for (let i = 0; i < dict.length; i++) {
            if (dict[i][quesIndex] === str) {
                return shapeAnswer(dict[i], onlyAnswer, answerIndex);
            }
        }
    }
    return [];
}) as IXHY;

function shapeAnswer (item: Array<string>, onlyAnswer: boolean, answerIndex: number): Array<string> {
    let answer: Array<string>;
    if (item[answerIndex].indexOf('；') !== -1) {
        answer = item[answerIndex].split('；');
    } else {
        answer = [item[answerIndex]];
    }
    if (!onlyAnswer) {
        const fn = answerIndex === 1 ? (a: string, index: number) => {
            answer[index] = `${item[1 - answerIndex]}-${a}`;
        } : (a: string, index: number) => {
            answer[index] = `${a}-${item[1 - answerIndex]}`;
        };
        answer.forEach(fn);
    }
    return answer;
}

export const addXhy: IAddXhy = (arg: TAddXhyArg1 | string, arg2?: string): void => {
    if (typeof arg === 'string' && typeof arg2 === 'string') {
        addXhy([arg as string, arg2 as string]);
        return;
    }
    if (!(arg instanceof Array)) {
        console.warn('addXhy 参数必须为数组');
        return;
    }
    if (arg[0] instanceof Array) {
        (arg as Array<Array<string>>).forEach((item: Array<string>) => {
            addXhy(item);
        });
        return;
    }
    dict.push(arg as Array<string>);
};

export function setCnchar (cnchar: ICnChar): void {
    _cnchar = cnchar;
}