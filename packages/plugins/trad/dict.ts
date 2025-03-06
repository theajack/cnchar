import originCountDict from './dict/stroke-count-trad.json';
import originOrderDict from './dict/stroke-order-trad.json';
import originTradDict from './dict/trad-simple.json';
import originSparkDict from './dict/spark-simple.json';
import originCodeDict from './dict/code.json';
import originInfoDict from './dict/info.json';
import radical from './dict/radicals-trad.json';
import wubi from './dict/wubi-trad.json';
import {Json} from 'cnchar-types/main/common';
 
export const codeDict = originCodeDict as Json<string>;
export const countDict = originCountDict as Json<string>;
export const orderDict = originOrderDict as Json<string>;
export const tradDict = originTradDict;
export const sparkDict = originSparkDict;

export function getDict () {
    return {
        code: codeDict,
        count: countDict,
        order: orderDict,
        trad: tradDict,
        spark: sparkDict,
        radical: radical as any,
        info: originInfoDict as any,
        wubi,
    };
}