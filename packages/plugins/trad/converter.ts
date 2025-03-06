import {TradArg} from 'cnchar-types/main';
import {IConverter} from 'cnchar-types/plugin/trad';
import {tradDict, sparkDict} from './dict';
import {TTradAag} from 'cnchar-types/plugin/trad';

const type: TTradAag = {trad: 'trad', simple: 'simple', spark: 'spark'};

function convert (str: string, to: TradArg, from: TradArg): string {
    if (typeof to === 'undefined' || !type[to]) {
        throw new Error('convert 参数类型错误： to=' + to);
    }
    if (typeof from === 'undefined' || !type[from]) {
        throw new Error('convert 参数类型错误： from=' + from);
    }
    let toDict = '', fromDict = '';
    if (to === type.simple) {
        if (from === type.trad) { // 繁体 => 简体
            toDict = tradDict.simple;
            fromDict = tradDict.trad;
        } else { // 火星 => 简体
            toDict = sparkDict.simple;
            fromDict = sparkDict.spark;
        }
    } else if (to === type.trad) {
        if (from === type.simple) { // 简体 => 繁体
            toDict = tradDict.trad;
            fromDict = tradDict.simple;
        } else { // 火星 => 繁体
            return convert(convert(str, type.simple, type.spark), type.trad, type.simple);
        }
    } else {
        if (from === type.trad) { // 繁体 => 火星
            return convert(convert(str, type.simple, type.trad), type.spark, type.simple);
        } else { // 简体 => 火星
            toDict = sparkDict.spark;
            fromDict = sparkDict.simple;
        }
    }
    let res = '';
    for (let i = 0; i < str.length; i++) {
        const index = fromDict.indexOf(str[i]);
        res += ((index !== -1) ? toDict[index] : str[i]);
    }
    return res;
}

export const converter: IConverter = {
    type,
    simpleToTrad: function (str: string): string { return convert(str, type.trad, type.simple); },
    simpleToSpark: function (str: string): string { return convert(str, type.spark, type.simple); },
    tradToSimple: function (str: string): string { return convert(str, type.simple, type.trad); },
    tradToSpark: function (str: string): string { return convert(str, type.spark, type.trad); },
    sparkToSimple: function (str: string): string { return convert(str, type.simple, type.spark); },
    sparkToTrad: function (str: string): string { return convert(str, type.trad, type.spark); }
};


