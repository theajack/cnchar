import dict from '../dict';
import {Json} from 'cnchar-types/main/common';
import {ICnChar, StrokeToWordArg, TypeValueObject} from 'cnchar-types/main/index';
import {ICncharTool} from 'cnchar-types/main/tool';
const arg: {
    [prop in StrokeToWordArg]: StrokeToWordArg
} = {simple: 'simple', trad: 'trad', array: 'array'};
let _: ICncharTool;// 工具方法

export function initStrokeToWord (cnchar: ICnChar): void {
    cnchar.strokeToWord = strokeToWord;
    cnchar.type.strokeToWord = arg as TypeValueObject;
    _ = cnchar._;
}

export function strokeToWord (count: number, ...args: Array<StrokeToWordArg>): string | Array<string> {
    if (typeof count !== 'number' || count <= 0) {
        throw new Error('strokeToWord: 输入必须是正整数');
    }
    _.checkArgs('strokeToWord', args);
    let res = '';
    const argRes = {
        simple: _.has(args, arg.simple),
        trad: _.has(args, arg.trad),
    };
    if (!argRes.simple && !argRes.trad) {
        argRes.simple = argRes.trad = true;
    }
    if (argRes.simple) {
        res += base(count, dict.stroke); // 简体
    }
    if (argRes.trad && _.dict.getTradCount) {
        res += base(count, _.dict.getTradCount()); // 繁体
    }
    if (_.has(args, arg.array)) {
        return res.split('');
    }
    return res;
}

function base (count: number, dict: Json<string>): string {
    if (typeof dict[count] === 'undefined')
        return '';
    return dict[count];
}